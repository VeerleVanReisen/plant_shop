import ProductsContextTypeItem from "./products-context-item-type";

export default interface ProductsContextType {
  items: [];
  totalAmount: number;
  addItem: (item: ProductsContextTypeItem) => {};
  removeItem: (id: number) => {};
}
