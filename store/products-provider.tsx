import ProductsContext from "./products-context";
import { useReducer } from "react";
import ProductsContextTypeItem from "./products-context-item-type";
import ProductsContextType from "./products-context-type";
const defaultProductsState = {
  items: [],
  totalAmount: 0,
};
const productsReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const itemAlreadyInArray = state.items.findIndex(
      (item: ProductsContextTypeItem) => item.id === action.item.id
    );

    const existingItems = state.items[itemAlreadyInArray];

    let newItems;

    if (existingItems) {
      const newItem = {
        ...existingItems,
        amount: existingItems.amount + action.item.amount,
      };
      newItems = [...state.items];
      newItems[itemAlreadyInArray] = newItem;
    } else {
      newItems = state.items.concat(action.item);
    }

    const totalAmountCalculated =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: newItems,
      totalAmount: totalAmountCalculated,
    };
  }
  if (action.type === "REMOVE") {
    const itemAlreadyInArray = state.items.findIndex(
      (item: ProductsContextTypeItem) => item.id === action.id
    );
    const existingItem = state.items[itemAlreadyInArray];
    const newTotalAmount = state.totalAmount - existingItem.price;
    let newItems;
    if (existingItem.amount === 1) {
      newItems = state.items.filter(
        (item: ProductsContextTypeItem) => item.id !== action.id
      );
    } else {
      const newItem = { ...existingItem, amount: existingItem.amount - 1 };
      newItems = [...state.items];
      newItems[itemAlreadyInArray] = newItem;
    }
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultProductsState;
};
const ProductsProvider = (props: any) => {
  const [productsState, dispatchProductsAction] = useReducer(
    productsReducer,
    defaultProductsState
  );
  const addItemToProductsHandler = (item: ProductsContextTypeItem) => {
    console.log("addItemToCart");
    dispatchProductsAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromProductsHandler = (id: number) => {
    dispatchProductsAction({
      type: "REMOVE",
      id: id,
    });
  };
  const productsContext: {
    items: ProductsContextTypeItem;
    totalAmount: number;
    addItem: (item: any) => void;
    removeItem: (id: any) => void;
  } = {
    items: productsState.items,
    totalAmount: productsState.totalAmount,
    addItem: addItemToProductsHandler,
    removeItem: removeItemFromProductsHandler,
  };
  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
