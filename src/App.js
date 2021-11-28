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

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BrowserRouter>
        <Header title="MugiStore!" img_alt="MugiStore!" />
        <Routes>

          <Route exact path="/" element={<Home Banners={useFeaturedBanners()} Categories={useFeaturedCategories()} />} />
          <Route path={"/home"} element={<Home Banners={useFeaturedBanners()} Categories={useFeaturedCategories()} />} />

          <Route
            path="/ProductList"
            element={<ProductListPage Categories={getCategories()} />}
          >
             <Route path=":id" element={<ProductListPage Categories={getCategories()} />} />
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
