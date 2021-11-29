import logo from "./../../imgs/mugiwara.jpg";
import shoppingCart from "./../../imgs/shoppingCart.png";
import "./Header.css";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchPage from "../SearchPage/SearchPage";

function Header({ img_alt, title }) {
  let navigate = useNavigate();
  const img = logo;
  const [searchValue,searchValueState] = useState("");
  const Search = () => {
    /*const navigate = useNavigate();
    let val=document.getElementById("SearchInput").value;
    console.log(val,"VALUE");
    let path = "/search?q="+val;
    navigate(path);
    */
  };
  const changeSearchValue=(event)=>{
    searchValueState(event.target.value);
    console.log(searchValue);
  }
  
  const redirect=()=>{
    navigate("/home", { replace: true });
    navigate("/search?q="+searchValue, { replace: true });
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
        <img src={shoppingCart} class="cartImg"></img>
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
