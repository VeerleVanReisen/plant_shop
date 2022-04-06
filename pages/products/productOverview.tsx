import { withRouter } from "next/router";
import ProductsProvider from "../../store/products-provider";
import ProductOverviewContent from "./productOverviewContent";
import { productsTypes } from "../../components/products/products-types";

function ProductOverview({ router: { query } }) {
  const object: productsTypes = JSON.parse(query.object);

  console.log("object: ", object);

  return (
    <ProductsProvider>
      <ProductOverviewContent object={object} />
    </ProductsProvider>
  );
}

export default withRouter(ProductOverview);
