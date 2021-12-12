import EventButton from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./Item.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Item({ img, category, title, price, id, showDesc, desc, stock }) {
  const { CartProducts, handleProducts } = useContext(CartContext);
  const { getQtyInCart } = useContext(CartContext);
  const addToCart = () => {
    //alert("lmao");
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
      1
    );
  };

  return (
    <div class="card">
      <div class="title">
        <h1 class="title">
          [{category}]{title}
        </h1>
        <h1> $ {price} </h1>{" "}
        <h2>
          {" "}
          [On Stock: {stock}] [On Cart:{getQtyInCart(id)}]
        </h2>
      </div>
      <img class="itemimg" alt="iteming" src={img} />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={addToCart} disabled={getQtyInCart(id) >= stock}>
          Add To Cart
        </button>
        <br />
        &nbsp;
        <NavLink to={"/Product/" + id}>
          <EventButton text={"See More"} />
        </NavLink>
      </div>
      <div>{showDesc ? <h3>{desc}</h3> : ""}</div>
    </div>
  );
}
export default Item;
