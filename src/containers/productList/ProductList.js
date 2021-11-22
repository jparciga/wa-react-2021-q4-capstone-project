import { div } from "prelude-ls";
import Item from "../productItem/Item";
import "./ProductList.css";
import Products from "./../../mocks/en-us/products.json";
//{"title":"","img":"","desc":""}
function List(props) {
  let items = Products.results;

  return (
    <div class="float-container">
      <table>
        <tr>
          <td>
            {items.map((element, i) => {
              if (i < 3)
                return (
                  <div class="float-child">
                    <Item
                      title={element.data.name}
                      img={element.data.mainimage.url}
                      desc={element.data.short_description}
                      price={element.data.price}
                      category={element.data.category.slug}
                      width="100%"
                    />
                  </div>
                );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default List;
