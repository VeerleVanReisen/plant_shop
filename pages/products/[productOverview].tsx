import { useRouter } from "next/router";
import { Header } from "../../components/header/header";

const ProductOverview = () => {
  const router = useRouter();
  const value = router.query.productOverview;
  return (
    <Header>
      <p>{value}</p>
    </Header>
  );
};

export default ProductOverview;
