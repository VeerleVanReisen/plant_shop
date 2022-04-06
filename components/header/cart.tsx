import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

import { useContext } from "react";
import ProductsContext from "../../store/products-context";
import ProductsContextTypeItem from "../../store/products-context-item-type";

export const Cart = () => {
  const productsCtx = useContext(ProductsContext);
  const totalAmount = `€${productsCtx.totalAmount.toFixed(2)}`;
  const cartIsNotEmpty = productsCtx.items.length > 0;

  const removeItem = (id: number) => {
    productsCtx.removeItem(id);
  };

  const addItem = (item: ProductsContextTypeItem) => {
    productsCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {productsCtx.items.map((item: ProductsContextTypeItem) => (
        <li key={item.id}>
          <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
            <img
              src={item.imageSrc}
              className="flex-shrink-0 h-20  text-indigo-700"
              aria-hidden="true"
            />
            <div className="ml-8">
              <p className="text-base font-medium text-gray-900">
                {item.name} - {item.description}
              </p>
              <p className="mt-1 text-sm text-gray-500">Price: {item.price}</p>
              <p className="mt-1 text-sm text-gray-500">
                Amount: {item.amount}
              </p>
            </div>
            <div className="ml-10">
              <button onClick={addItem.bind(null, item)}>
                <PlusCircleIcon className="h-6 w-6 text-blue-500" />
              </button>
            </div>
            <div className="ml-2">
              <button onClick={removeItem.bind(null, item.id)}>
                <MinusCircleIcon className="h-6 w-6 text-blue-500" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      style={{ backgroundColor: "#ffffff" }}
      className=" bg-red rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        {cartItems}
        {!cartIsNotEmpty && (
          <p className="mt-1 text-sm text-gray-500">No items in cart</p>
        )}
        {cartIsNotEmpty && (
          <div>
            <span>Total amount: </span>
            <span>{totalAmount}</span>
          </div>
        )}
        <div>
          {cartIsNotEmpty && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
