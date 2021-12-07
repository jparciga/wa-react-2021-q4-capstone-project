import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItemRow from "./../CartItemRow/CartItemRow";

function CartPage() {
  const {CartProducts,handleProducts} = useContext(CartContext)
  let subtotal=0;
  if(CartProducts.length===0){
      return (<h1>Cart Empty</h1>)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", flexDirection: "row" }}>
            <table>
              <tr>
                <td>
                {CartProducts.map((element, i) => {
                    console.log(element,"aaaay");
                    subtotal+=element.price*element.qty;
                return (
                  <CartItemRow props={element}/>
                );
              })}
                </td>
              </tr>
            </table>
            </div>
      <div><h1>SubTotal: $ {subtotal}</h1></div>
    </div>
  );
}

export default CartPage;
