import ProductsContext from "./products-context";
import { useReducer } from "react";

const defaultProductsState = {
  items: [],
  totalAmount: 0,
};
const productsReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const totalAmountCalculated =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: totalAmountCalculated,
    };
  }
  return defaultProductsState;
};
const ProductsProvider = (props) => {
  const [productsState, dispatchProductsAction] = useReducer(
    productsReducer,
    defaultProductsState
  );
  const addItemToProductsHandler = (item) => {
    console.log("jkls;df");
    dispatchProductsAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromProductsHandler = (id) => {
    dispatchProductsAction({
      type: "REMOVE",
      id: id,
    });
  };
  const productsContext = {
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
