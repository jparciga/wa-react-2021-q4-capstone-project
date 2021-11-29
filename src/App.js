import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Footer from "./containers/Banner/Footer";
import Banners from "./mocks/en-us/featured-banners.json";
import Header from "./containers/Header/Header";
import React, { useState } from "react";
import Home from "./containers/Home/Home";
import { getCategories } from "./utils/getData";
import ProductListPage from "./containers/ProductListPage/ProductListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeaturedCategories } from "./utils/hooks/useFeaturedCategories";
import { useFeaturedProducts } from "./utils/hooks/useFeaturedProducts";
import { renderIntoDocument } from "react-dom/test-utils";
import ProductPage from "./containers/ProductPage/ProductPage";
import SearchPage from "./containers/SearchPage/SearchPage";

function App() {
  const getParamValueFromKey=(searchKey)=>{
    const params = new URLSearchParams(window.location.search)
    for (const [key, value] of params) {
      if(key===searchKey)
      return value;
    }
  };
  //let query = useQuery();
  let itemsPerPage=12;
  //console.log(query);
  //console.log(useFeaturedFetch());
  //return (<div>kek</div>)
  let products=useFeaturedProducts();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Header title="MugiStore!" img_alt="MugiStore!" />
        <Routes>

          <Route exact path="/" element={<Home Banners={useFeaturedBanners()} Categories={useFeaturedCategories()} Products = {useFeaturedProducts()} />} />
          <Route path={"/home"} element={<Home Banners={useFeaturedBanners()} Categories={useFeaturedCategories()} Products = {useFeaturedProducts()} />} />
          
          
          {["/ProductList", "/Products"].map((path, index) => 
        <Route path={path} element={<ProductListPage Categories={getCategories()} Products = {products} itemsPerPage={itemsPerPage}/>} >
          <Route path=":id" element={<ProductListPage Categories={getCategories()} Products = {products} itemsPerPage={itemsPerPage}/>} />
        </Route>
    )}

          <Route
            path="/search"
            element={<SearchPage Products = {useFeaturedProducts()} searchTerm={getParamValueFromKey("q")}/>}
          >
          </Route>
          
          <Route
            path="/Product"
            element={<ProductPage Products = {useFeaturedProducts()}/>}
          >
             <Route path=":id" element={<ProductPage Products = {useFeaturedProducts()}/>} />
          </Route>

          <Route
            path="*"
            element={
              <div>
                <h1>Error 404. Page Not Found.</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer text="Ecommerce created during Wizeline’s Academy React Bootcamp"></Footer>
    </div>
  );
}

export default App;
/*
<Route
            path= {["/ProductList", "/Products"]}
            element={<ProductListPage Categories={getCategories()} Products = {useFeaturedProducts()} itemsPerPage={itemsPerPage}/>}
          >
             <Route path=":id" element={<ProductListPage Categories={getCategories()} Products = {useFeaturedProducts()} itemsPerPage={itemsPerPage}/>} />
          </Route>

*/