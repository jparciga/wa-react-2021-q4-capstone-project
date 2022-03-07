import { NavLink } from "react-router-dom";
import "./CartItemRow.css";
import { useContext } from "react";
import CartContext, { CartProvider } from "../../context/CartContext";

function CartItemRow({ props }) {
  const { CartProducts, handleProducts } = useContext(CartContext);
  const { getQtyInCart } = useContext(CartContext);

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

  return (
    <div style={{ display: "flex", flexDirection: "row" }} width="100%">
      <div>
        <h1 class="title">
          [{category}]{title}
        </h1>
        <h1> $ {price} </h1>
        <h2>
          {" "}
          [On Stock: {stock}] [On Cart:{getQtyInCart(id)}]
        </h2>
      </div>
      <img class="itemimg" alt="iteming" src={img} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          Qty <input type="text" value={getQtyInCart(id)}></input>
          <button
            onClick={() => {
              addToCart(1);
            }}
            disabled={getQtyInCart(id) >= stock}
          >
            +1
          </button>
          <button
            onClick={() => {
              addToCart(-1);
            }}
            disabled={getQtyInCart(id) === 0}
          >
            -1
          </button>
        </div>
        <br />
        &nbsp;
        <NavLink to={"/Product/" + id}>
          <button>See More</button>
        </NavLink>
      </div>
      <div>{showDesc ? <h3>{desc}</h3> : ""}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h1>Subtotal for this item</h1>
        </div>
        <div>
          <h2>$ {getQtyInCart(id) * price}</h2>
        </div>
      </div>
    </div>
  );
}
export default CartItemRow;
