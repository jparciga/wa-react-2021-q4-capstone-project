import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import List from "../productList/ProductList";
import BannerSlider from "./../Banner/BannerSlider";
import {NavLink} from 'react-router-dom';

const Home=({Banners, onAllProductsClick})=>{
    return(<div>
        <BannerSlider banners={Banners}></BannerSlider>
      <CategoriesSlider />
      <List></List>
      <NavLink to="/ListarProductos">
        <button class="viewAllProductsButton">
              View all products
            </button>
      </NavLink>
            </div>)
    }
export default Home;