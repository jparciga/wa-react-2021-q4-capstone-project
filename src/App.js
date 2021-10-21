import "./App.scss";
import Navheader from "./components/navheader/Navheader";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import { slides } from "./data/banners";
import { categories } from "./data/categories";
import { products } from "./data/products";

function App() {
  return (
    <div className="App">
      <Navheader></Navheader>
      <Home
        slides={slides.results}
        categories={categories.results}
        products={products.results}
      ></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
