//import logo from './logo.svg';
//import logo from './imgs/mugiwara.jpg';
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
//import List from './containers/productList/ProductList';
import BannerSlider from "./containers/Banner/BannerSlider";
import CategoriesSlider from "./containers/CategoriesSlider/CategoriesSlider";
import Footer from "./containers/Banner/Footer";
import Banners from "./mocks/en-us/featured-banners.json";
import Header from "./containers/Header/Header";
//import ProductListPage from './containers/ProductListPage/ProductListPage';
import PageSelector from "./containers/PageSelector/PageSelector";
import React, { useState, useEffect } from "react";
import Categories from "./mocks/en-us/product-categories.json";
let pages = ["Home", "PriductListPage"];


const Home=()=>{
return(<div><BannerSlider banners={Banners}></BannerSlider>
  <CategoriesSlider /></div>)
}

var Cats=[];
function getCategories(){
  Cats=[];
  for(let i in Categories.results){
    let cat = Categories.results[i];

    Cats.push({
      name: cat.data.name,
      id: cat.id,
      selected: false
    });
    console.log(Cats[i].name,Cats[i]);
  }
}

function App() {
  getCategories();
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  let [pageIndex, setPageIndex] = useState(0);

  const changePage = (indx) => {
    if(pageIndex!==indx){
    //alert(indx);
    setPageIndex(indx);
    }
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <Header
              title="MugiStore!"
              img_alt="MugiStore!"
              logo_event={changePage}
            />
          </td>
        </tr>
        <tr>
          <td>
            { pageIndex===0 &&
            < Home />
            }
            <PageSelector page={pages[pageIndex]} Categories={Cats}></PageSelector>
          </td>
        </tr>
        <tr>
          <td align="center">
            <button
              class="viewAllProductsButton"
              onClick={() => {
                changePage(1);
              }}
            >
              View all products
            </button>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <Footer text="Ecommerce created during Wizeline’s Academy React Bootcamp"></Footer>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
