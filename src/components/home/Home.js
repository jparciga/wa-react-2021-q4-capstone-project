import React from "react";
import Slider from "../slider/Slider";
import CategoryCarousel from "../categoryCarousel/CategoryCarousel";
import ProductGrid from "../productGrid/ProductGrid";
const Home = (props) => {
  return (
    <div>
      <Slider slides={props.slides}></Slider>
      <CategoryCarousel categories={props.categories}></CategoryCarousel>
      <ProductGrid
        products={props.products}
        categories={props.categories}
      ></ProductGrid>
    </div>
  );
};

export default Home;
