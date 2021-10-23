import "./App.scss";
import Navheader from "./components/navheader/Navheader";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import slides from "./data/banners";
import categories from "./data/categories";
import products from "./data/products";
import React, { useState } from "react";

function App() {
  const [homeContent, sethomeContent] = useState(true);
  const handleHomeContentView = (val) => {
    console.log(val)
    sethomeContent(val);
  };
  const home = (
    <Home
      changeHome={handleHomeContentView}
      slides={slides.results}
      categories={categories.results}
      products={products.results}
    ></Home>
  );
  return (
    <div className="App">
      <Navheader changeHome={handleHomeContentView} />
      {homeContent ? home : <span>Test</span>}
      <Footer />
    </div>
  );
}

export default App;
