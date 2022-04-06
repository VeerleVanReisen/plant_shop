import { Header } from "../../components/header/header";
import { ProductList } from "../../components/products/products-list";
import ProductsProvider from "../../store/products-provider";

const Products = () => {
  return (
    <ProductsProvider>
      <Header>
        <ProductList />
      </Header>
    </ProductsProvider>
  );
};

export default Products;
