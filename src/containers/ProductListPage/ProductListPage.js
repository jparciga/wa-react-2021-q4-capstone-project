import { div } from "prelude-ls";
import Item from "../productItem/Item";
import "./ProductListPage.css";
import Products from "./../../mocks/en-us/products.json";
import SideBar from "../SideBar/SideBar";
import PaginationBar from "../PaginationBar/PaginationBar";

function ProductListPage(props) {
  let items = Products.results;
  let maxItems = 0;
  return (
    <div class="float-container">
      <table>
        <tr>
          <td width="75%">
            {items.map((element, i) => {
              maxItems = i;
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
          <td class="CategoriesSideBar" rowSpan={maxItems}>
            <SideBar></SideBar>
          </td>
        </tr>
        <tr>
          <td><PaginationBar></PaginationBar></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default ProductListPage;
