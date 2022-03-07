import React from "react";
import ProductListPage from "../ProductListPage/ProductListPage";
import List from "../productList/ProductList";

const PageSelector = (props) => {
  switch (props.page) {
    case "ProductListPage":
      return <ProductListPage Categories={props.Categories}></ProductListPage>;
    case "Home":
      return <List></List>;
    default:
      return <h1>Page Not Found</h1>;
  }
};

export default PageSelector;
