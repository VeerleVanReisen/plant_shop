// Used example from https://tailwindui.com/components/ecommerce/components/product-overviews

import { withRouter } from "next/router";
import { useRef, useState, useContext } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Header } from "../../components/header/header";
import ProductsProvider from "../../store/products-provider";
import ProductsContext from "../../store/products-context";
import { productsTypes } from "../../components/products/products-types";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  object: productsTypes;
};

const ProductOverviewContent = ({ object }: Props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const productsCtx = useContext(ProductsContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredNumberOfItems: string = amountInputRef.current.value;
    const enteredNumberOfItemsNumber: number = +enteredNumberOfItems;

    if (
      enteredNumberOfItems.trim().length === 0 ||
      enteredNumberOfItemsNumber < 1 ||
      enteredNumberOfItemsNumber > 100
    ) {
      setAmountValid(false);
      return;
    }

    productsCtx.addItem({
      id: object.id,
      name: object.name,
      description: object.description,
      price: object.price,
      imageSrc: object.imageSrc,
      imageAlt: object.imageAlt,
      information: object.information,
      rating: object.rating,
      totalReviews: object.totalReviews,
      amount: enteredNumberOfItemsNumber,
    });
  };

  return (
    <Header>
      <div className="bg-white">
        <div className="pt-6">
          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            {/* Image product */}
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={object.imageSrc}
                alt={object.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            {/* Description and details */}
            <div className=" lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {object.name}
              </h1>
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {object.description}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Information
                </h3>

                <div className="mt-4">
                  <p className="text-base text-gray-900">
                    {object.information}
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">??? {object.price}</p>
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          object.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{object.rating} out of 5 stars</p>
                  <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {object.totalReviews} reviews
                  </a>
                </div>
              </div>
              <form className="mt-10" onSubmit={submitHandler}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Amount
                  </label>
                  <input
                    ref={amountInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="number"
                    defaultValue={1}
                    step="1"
                  />
                  <button
                    type="submit"
                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>
                  {!amountValid && <p> Invalid amount (1-100)</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ProductOverviewContent;
