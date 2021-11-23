import logo from './../../imgs/mugiwara.jpg';
 import shoppingCart from './../../imgs/shoppingCart.png';
import "./Header.css"


function Header(props){ 
  //const title="Mugistore!";
  const img=logo;
  //const img_alt="Mugistore!";

    return(
    <div>
       <table class="headerTable">
           <tr class="header">
            <td class="headerLogo"><img src={img} alt={props.img_alt} class="headerLogoImg"></img></td>
            <td class="headerTitle"><h1> {props.title} </h1></td>
            <td class="cart"><img src={shoppingCart} class="cartImg"></img></td>
            <td class="search">Search: <input></input></td>
            </tr>
        </table>
    </div>
)

}

export default Header;