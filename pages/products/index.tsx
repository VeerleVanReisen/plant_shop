import { Header } from "../../components/header/header";
import { ProductList } from "../../components/products/products-list";

const Products = () => {
  return (
    <>
      <Header>
        {/* <h1> Dit is de producten pagina </h1> */}
        <ProductList />
      </Header>
    </>
  );
};

export default Products;
