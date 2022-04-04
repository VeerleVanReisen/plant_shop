import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

import { useContext } from "react";
import ProductsContext from "../../store/products-context";

interface cartTypes {
  closeElement: React.MouseEventHandler<HTMLButtonElement>;
}

export const Cart = (props: cartTypes) => {
  const productsCtx = useContext(ProductsContext);
  const totalAmount = `€${productsCtx.totalAmount.toFixed(2)}`;
  const cartIsNotEmpty = productsCtx.items.length > 0;

  const removeItem = (id) => {
    productsCtx.removeItem(id);
  };

  const addItem = (item) => {
    productsCtx.addItem(item);
  };

  const cartItems = (
    <ul>
      {productsCtx.items.map((item) => (
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
          {/* <button
            onClick={props.closeElement}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Close
          </button> */}

          {cartIsNotEmpty && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Order
            </button>
          )}
        </div>
      </div>
      {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
        {callsToAction.map((item) => (
          <div key={item.name} className="flow-root">
            <a
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">{item.name}</span>
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};
