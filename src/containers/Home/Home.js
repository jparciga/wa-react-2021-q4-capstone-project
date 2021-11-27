import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import List from "../productList/ProductList";
import BannerSlider from "./../Banner/BannerSlider";

const Home=({Banners, onAllProductsClick})=>{
    return(<div>
        <BannerSlider banners={Banners}></BannerSlider>
      <CategoriesSlider />
      <List></List>
      <button
              class="viewAllProductsButton"
              onClick={() => {
                onAllProductsClick(1);
              }}
            >
              View all products
            </button></div>)
    }
export default Home;