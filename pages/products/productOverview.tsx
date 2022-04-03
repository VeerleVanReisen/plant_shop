// export default withRouter(ProductOverview);

// Used example https://tailwindui.com/components/ecommerce/components/product-overviews
import { withRouter } from "next/router";
import { useRef, useState, useContext } from "react";

import { StarIcon } from "@heroicons/react/solid";
import { Header } from "../../components/header/header";
import ProductsProvider from "../../store/products-provider";
import ProductsContext from "../../store/products-context";
import ProductOverviewContent from "./productOverviewContent";

function ProductOverview({ router: { query } }) {
  const object: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
    information: string;
    rating: number;
    totalReviews: number;
  } = JSON.parse(query.object);

  console.log("object: ", object);

  return (
    <ProductsProvider>
      <ProductOverviewContent object={object} />
    </ProductsProvider>
  );
}

export default withRouter(ProductOverview);
