
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./containers/Banner/Footer";
import Banners from "./mocks/en-us/featured-banners.json";
import Header from "./containers/Header/Header";
import React, { useState } from "react";
import Home from "./containers/Home/Home";
import {getCategories} from "./utils/getData"
import ProductListPage from "./containers/ProductListPage/ProductListPage";


function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  let [pageIndex, setPageIndex] = useState(0);
  
  const changePage = (indx) => {
    setPageIndex(indx);
  };

  const pages = [< Home Banners ={Banners} onAllProductsClick={changePage}/>, <ProductListPage Categories={getCategories()}></ProductListPage>]

  return (

    <div style = {{display:'flex', flexDirection:'column'}}>
    <Header
                  title="MugiStore!"
                  img_alt="MugiStore!"
                  logo_event={changePage}></Header>
      {pages[pageIndex]}
      <Footer text="Ecommerce created during Wizeline’s Academy React Bootcamp"></Footer>
    </div>
  );
}



export default App;

