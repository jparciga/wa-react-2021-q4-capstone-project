import React from "react";
import "./ProductSideFilter.scss";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import ProductGrid from "../productGrid/ProductGrid";
const ProductSideFilter = () => {
  return (
    <div >
      <div className="sidebar">
        {categories.results.map((ele) => (
          <a href="#home">{ele.data.name}</a>
        ))}
      </div>
      <div className="gridContent">
        {" "}
        <ProductGrid
          products={products.results}
          categories={categories.results}
        ></ProductGrid>
      </div>
    </div>
  );
};

export default ProductSideFilter;
