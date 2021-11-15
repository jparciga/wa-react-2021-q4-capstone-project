//import logo from './../../imgs/mugiwara.jpg';
 import shoppingCart from './../../imgs/shoppingCart.png';
import "./Banner.css"
import Banners from "./../../mocks/en-us/featured-banners.json";


function Banner(props){ 

  let banner_index=props.index;
  const banner=Banners.results[banner_index];
  const banner_title=banner.data.title;
  const banner_img=banner.data.main_image.url;
  const banner_img_alt=banner.data.main_image.alt;

    return(
    <div>
       <table class="bannertable">
           <tr class="banner">
            <td class="bannerlogo"><img src={banner_img} alt={banner_img_alt} class="bannerlogoimg"></img></td>
            <td class="bannertitle"><h1> {banner_title} </h1></td>
            <td class="cart"><img src={shoppingCart} class="cartimg"></img></td>
            <td class="search">Search: <input></input></td>
            </tr>
        </table>
    </div>
)

}

export default Banner;