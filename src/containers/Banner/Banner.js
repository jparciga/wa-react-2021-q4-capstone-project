//import logo from './../../imgs/mugiwara.jpg';
 import shoppingCart from './../../imgs/shoppingCart.png';
import "./Banner.css"
//import Banners from "./../../mocks/en-us/featured-banners.json";


function Banner(props){ 

    return(
    <div>
       <table class="bannertable">
           <tr class="banner">
            <td class="bannerlogo"><img src={props.banner_img} alt={props.banner_img_alt} class="bannerlogoimg"></img></td>
            <td class="bannertitle"><h1> {props.banner_title} </h1></td>
            </tr>
        </table>
    </div>
)

}

export default Banner;