import React from "react";
import ProductListPage from "../ProductListPage/ProductListPage";
import List from "../productList/ProductList";

const PageSelector = (props) => {
  switch (props.page) {
    case "PriductListPage":
      return <ProductListPage></ProductListPage>;
    case "Home":
      return <List></List>;
    default:
      return <h1>Page Not Found</h1>;
  }
};

export default PageSelector;
