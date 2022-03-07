import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./Checkout.css";
import OrderSummary from "../OrderSummary/OrderSummary";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Checkout() {
  const { CartProducts, handleProducts } = useContext(CartContext);

  if (CartProducts.length === 0) {
    return <h1>Cart Empty</h1>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <table>
          <tr>
            <td>
              <CheckoutForm></CheckoutForm>
            </td>
          </tr>
          <tr>
            <td>
              <OrderSummary></OrderSummary>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavLink to={"/Checkout"}>
          <Button text={"Place Order"} />
        </NavLink>
        &nbsp;
        <NavLink to={"/cart"}>
          <Button text={"Go Back to Cart"} />
        </NavLink>
      </div>
    </div>
  );
}

export default Checkout;
