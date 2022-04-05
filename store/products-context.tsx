import React from "react";
import ProductsContextTypeItem from "./products-context-item-type";

const ProductsContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: ProductsContextTypeItem) => {},
  removeItem: (id: number) => {},
});

export default ProductsContext;
