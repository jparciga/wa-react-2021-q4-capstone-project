//import logo from './../../imgs/mugiwara.jpg';
 import shoppingCart from './../../imgs/shoppingCart.png';
import "./Banner.css"
import Banners from "./../../mocks/featured-banners.json";


function Banner(props){ 

  let banner_index=props.index;
  const banner=Banners.results[banner_index];
  const banner_title=banner.data.title;
  const banner_img=banner.data.main_image.url;
  const banner_img_alt=banner.data.main_image.alt;


   
    return(
    <div class="header">
        <div>
    <img src={banner_img} alt={banner_img_alt} class="logo"/>
        <h1> {banner_title} </h1>
        
        <img src={shoppingCart} class="cart"></img></div>
        <div class="search">Search: <input></input>
        </div>
    </div>
)

}

export default Banner;