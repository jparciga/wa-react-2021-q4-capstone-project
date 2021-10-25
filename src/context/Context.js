import { createContext, useState } from "react";
import banners from "../mocks/en-us/featured-banners.json";
import categories from "../mocks/en-us/product-categories.json";
import product from "../mocks/en-us/featured-products.json";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [slider, setSlider] = useState(banners);
  const [carousel, setCarousel] = useState(categories);
  const [products, setProducts] = useState(product);
  const [showPage,setShowPage] = useState('home');
  const [writeFilter,setWriteFilter] = useState('');
 

  const data = {
    slider,
    carousel,
    products,
    setSlider,
    setCarousel,
    setProducts,
    showPage,
    setShowPage,
    writeFilter,
    setWriteFilter
   
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export { ContextProvider };

export default Context;
