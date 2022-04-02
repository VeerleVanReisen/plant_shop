import { Header } from "../../components/header/header";
import { ProductList } from "../../components/products/products-list";
import ProductsProvider from "../../store/products-provider";

const Products = () => {
  return (
    <ProductsProvider>
      <Header>
        {/* <h1> Dit is de producten pagina </h1> */}
        <ProductList />
      </Header>
    </ProductsProvider>
  );
};

export default Products;
