import logo from "./../../imgs/mugiwara.jpg";
import shoppingCart from "./../../imgs/shoppingCart.png";
import "./Header.css";

function Header({ logo_event, img_alt, title }) {
  //const title="Mugistore!";
  const img = logo;
  //const img_alt="Mugistore!";

  return (
    <div style={{ display: "flex", flexDirection: "row" }} class="headerTable">
      <div class="headerLogo">
        <button
          onClick={() => {
            logo_event(0);
          }}
        >
          <img src={img} alt={img_alt} class="headerLogoImg"></img>
        </button>
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

/*<div>
      <table class="headerTable">
        <tr class="header">
          <td class="headerLogo">
            <button
              onClick={() => {
                logo_event(0);
              }}
            >
              <img src={img} alt={img_alt} class="headerLogoImg"></img>
            </button>
          </td>
          <td class="headerTitle">
            <h1> {title} </h1>
          </td>
          <td class="cart">
            <img src={shoppingCart} class="cartImg"></img>
          </td>
          <td class="search">
            Search: <input></input>
          </td>
        </tr>
      </table>
    </div>*/
