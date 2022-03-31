// import { useRouter, withRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { Header } from "../../components/header/header";

// const ProductOverview = ({ router: { query } }) => {
//   //   const router = useRouter();
//   //   const value = router.query.productOverview;
//   const object = JSON.parse(query.object);

//   //   const [data, setData] = useState();
//   //   useEffect(() => {
//   //     setData(getQueryParams(window.location.search));
//   //   }, []);

//   //   console.log(data);
//   console.log("object: ", object);
//   return (
//     <Header>
//       {/* <p>{value}</p> */}
//       <div>
//         about {object.key1} | {object.key2}
//       </div>
//     </Header>
//   );
// };

// export default withRouter(ProductOverview);

import { withRouter } from "next/router";

function ProductOverview({ router: { query } }) {
  const object = JSON.parse(query.object);

  return (
    <div>
      productOverview {object.name} | {object.description} |
    </div>
  );
}

export default withRouter(ProductOverview);
