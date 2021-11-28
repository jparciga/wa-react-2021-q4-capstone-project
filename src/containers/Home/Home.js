import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import List from "../productList/ProductList";
import BannerSlider from "./../Banner/BannerSlider";
import {NavLink} from 'react-router-dom';

const Home=({Banners,Categories})=>{
    return(<div>
        <BannerSlider banners={Banners}></BannerSlider>
      <CategoriesSlider categories={Categories} />
      <List></List>
      <NavLink to="/ProductList">
        <button class="viewAllProductsButton">
              View all products
            </button>
      </NavLink>
            </div>)
    }
export default Home;