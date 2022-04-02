import React from "react";

const ProductsContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ProductsContext;
