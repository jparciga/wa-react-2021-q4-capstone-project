import Button from "../Button/Button";
import "./ProductPage.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductPage(products) {
  let params = useParams();
  let idItem = params.id;
  let results = products.Products.data.results;
  let product = getProduct(results, idItem);
  console.log(results, idItem);
  if (product === null)
    return (
      <div>
        <h1>Product not Found.</h1>
      </div>
    );
  let title = product.data.name;
  let img = product.data.mainimage.url;
  let desc = product.data.short_description;
  let price = product.data.price;
  let category = product.data.category.slug;
  let sku = product.data.sku;
  let tags = product.tags;
  let specs = product.data.specs;
  let id = product.id;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div class="productPageCard">
        <div class="productPagetitle">
          <h1 class="productPagetitle">
            [{category}] {title}
          </h1>
          <h1> $ {price}</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img class="productPageitemimg" src={img} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div><h3>Description: <p>{desc}</p></h3></div>
            <h3>SKU: {sku}</h3>

            <div>
              <h2>
                Qty <input type="number"></input>
              </h2>
            </div>
            <div>
              <h2>Tags: </h2>
              <h3>
                {tags.map((element, i) => {
                  return (
                    <div>
                      {"#"}
                      {element}
                    </div>
                  );
                })}
              </h3>
            </div>

            <table>
              <tr>
                <td>
                  <strong>Spec</strong>
                </td>
                <td>
                  <strong>Spec description</strong>
                </td>
              </tr>
              {specs.map((element, i) => {
                return (
                  <tr>
                    <td>{element.spec_name}</td>
                    <td>{element.spec_value}</td>
                  </tr>
                );
              })}
            </table>
            <br />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button text={"Add to Cart"} />
          &nbsp;
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
