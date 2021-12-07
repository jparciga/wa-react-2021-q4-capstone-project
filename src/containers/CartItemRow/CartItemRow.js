import { NavLink } from "react-router-dom";
import "./CartItemRow.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CartItemRow({ props }) {
  const { CartProducts, handleProducts } = useContext(CartContext);

  let img = props.img,
    category = props.category,
    title = props.title,
    price = props.price,
    id = props.id,
    showDesc = props.showDesc,
    desc = props.desc,
    stock = props.stock;
  const addToCart = (qty) => {
    handleProducts(
      {
        id: id,
        title: title,
        stock: stock,
        category: category,
        price: price,
        desc: desc,
        qty: 1,
        img: img,
      },
      qty
    );
  };

  const getQtyInCart = () => {
    let cont = 0;
    CartProducts.forEach((element, i) => {
      if (id === element.id) {
        cont = element.qty;
      }
    });
    return cont;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }} width="100%">
      <div>
        <h1 class="title">
          [{category}]{title}
        </h1>
        <h1> $ {price} </h1>
        <h2>
          {" "}
          [On Stock: {stock}] [On Cart:{getQtyInCart()}]
        </h2>
      </div>
      <img class="itemimg" alt="iteming" src={img} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          Qty <input type="text" value={getQtyInCart()}></input>
          {getQtyInCart() < stock ? (
            <button
              onClick={() => {
                addToCart(1);
              }}
            >
              +1
            </button>
          ) : (
            ""
          )}
          {getQtyInCart() !== 0 ? (
            <button
              onClick={() => {
                addToCart(-1);
              }}
            >
              -1
            </button>
          ) : (
            ""
          )}
        </div>
        <br />
        &nbsp;
        <NavLink to={"/Product/" + id}>
          <button>See More</button>
        </NavLink>
      </div>
      <div>{showDesc ? <h3>{desc}</h3> : ""}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div><h1>Subtotal for this item</h1></div>
        <div><h2>$ {getQtyInCart()*price}</h2></div>
      </div>
    </div>
  );
}
export default CartItemRow;
