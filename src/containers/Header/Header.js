import logo from "./../../imgs/mugiwara.jpg";
import shoppingCart from "./../../imgs/shoppingCart.png";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import CartContext from "../../context/CartContext";

function Header({ img_alt, title }) {
  const {CartProducts,handleProducts} = useContext(CartContext)

  let navigate = useNavigate();
  const img = logo;
  const [searchValue,searchValueState] = useState("");

  const changeSearchValue=(event)=>{
    searchValueState(event.target.value);
  }
  
  const redirect=()=>{
    navigate("/home", { replace: true });
    navigate("/search?q="+searchValue, { replace: true });
  }

  const getTotalCartItems=()=>{
    let cont=0;
    CartProducts.forEach((element,i) => {
      cont+=element.qty;
  });
  return cont;
  }

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
      <NavLink to="/cart">
        <img src={shoppingCart} alt="cartImg" class="cartImg"></img>
        </NavLink>
        <p> {getTotalCartItems()} Items on Cart</p>
      </div>
      <div class="search">
        Search <input id="SearchInput" onChange={changeSearchValue}></input>
        &nbsp;
        <button onClick={redirect}>
        Search
        </button>
      </div>
    </div>
  );
}

export default Header;
