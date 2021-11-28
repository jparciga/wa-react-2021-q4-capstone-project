import Button from "../Button/Button";
import "./ProductPage.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductPage(products) {
    let params = useParams();
    let idItem = params.id;
    let results=products.Products.data.results;
  let product = getProduct(results, idItem);
  console.log(results,idItem);
    if(product===null)return <div><h1>Product not Found.</h1></div>;
  let title = product.data.name;
  let img = product.data.mainimage.url;
  let desc = product.data.short_description;
  let price = product.data.price;
  let category = product.data.category.slug;
  let id = product.id;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div class="card">
        <div class="title">
          <h1 class="title">
            [{category}]{title}
          </h1>
          <h1> $ {price}</h1>
        </div>
        <img class="itemimg" src={img} />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <h2>{desc}</h2>
          </div>  <div style={{ display: "flex", flexDirection: "row" }}>
          <NavLink to={"/home/"}>
            <Button text={"Back to Home"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

function getProduct(products, id) {
  for (let i in products) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null;
}
