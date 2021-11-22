//import logo from './logo.svg';
//import logo from './imgs/mugiwara.jpg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
//import List from './containers/productList/ProductList';
import BannerSlider from './containers/Banner/BannerSlider';
import CategoriesSlider from './containers/CategoriesSlider/CategoriesSlider';
import Footer from './containers/Banner/Footer';
import Banners from "./mocks/en-us/featured-banners.json";
import Header from './containers/Header/Header';
//import ProductListPage from './containers/ProductListPage/ProductListPage';
import PageSelector from './containers/PageSelector/PageSelector';
import React,{ useState, useEffect } from 'react';

let pages=['ProductList','PriductListPage'];
function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  //let page="PriductListPage";
  let [pageIndex, setPageIndex] = useState(0);



  return(
    <div>
      <table>
        <tr>
        <td>
      <Header title="MugiStore!" img_alt="MugiStore!"/></td>
    </tr><tr>
    <td>
    <BannerSlider banners={Banners}></BannerSlider>
    <CategoriesSlider/>
    <PageSelector page={pages[pageIndex]}></PageSelector>

    </td></tr>
    <tr><td align="center">
    <button class="viewAllProductsButton" onClick={() => setPageIndex(pageIndex===1?0:1)}>View all products</button>
    </td></tr>
    <tr>
    <td> <Footer text="Ecommerce created during Wizeline’s Academy React Bootcamp"></Footer></td>
    </tr>
    </table>
   
    </div>
  );
}

function changePage(page){
  switch(page){
    case 'PriductListPage':
        return 'ProductList';
    case 'ProductList':
        return 'ProductListPage'
    default:
        return 'ProductList';
  }
}

export default App;
