import logo from "./../../imgs/mugiwara.jpg";
import shoppingCart from "./../../imgs/shoppingCart.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header({ img_alt, title }) {
  const img = logo;

  return (
    <div style={{ display: "flex", flexDirection: "row" }} class="headerTable">
      <div class="headerLogo">
        <NavLink to="/home">
          <img src={img} alt={img_alt} class="headerLogoImg"></img>
        </NavLink>
      </div>
      <div class="headerTitle">
        <h1> {title} </h1>
      </div>
      <div class="cart">
        <img src={shoppingCart} class="cartImg"></img>
      </div>
      <div class="search">
        Search: <input></input>
      </div>
    </div>
  );
}

export default Header;
