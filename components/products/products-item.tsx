import { productsTypes } from "./products-types";
import Link from "next/link";

export interface productsItemTypes {
  key: string;
  plants: productsTypes;
}
export const ProductsItem = (props: productsItemTypes) => {
  const price = `$${props.plants.price.toFixed(2)}`;
  return (
    <>
      {/* <Link href="/products/[id]"> */}
      <Link href={`/products/${props.plants.name}`}>
        <a key={props.plants.id} className="group">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={props.plants.imageSrc}
              alt={props.plants.imageAlt}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{props.plants.name}</h3>
          <h3 className="mt-4 text-sm text-gray-700">
            {props.plants.description}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
        </a>
      </Link>
    </>
  );
};
