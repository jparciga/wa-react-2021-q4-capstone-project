import "./SideBar.css";
import Categories from "./../../mocks/en-us/product-categories.json";

function SideBar(props) {
  return (
    <div class="float-container">
      <table>
        <tr>
          <td>
            <div class="CategoriesSideBarTitle">
              <h1>Categories</h1>
            </div>
          </td>
        </tr>
        {Categories.results.map((element, i) => {
          return (
            <tr>
              <td>
                <div class="SideBarItem">
                  <h1>{element.data.name}</h1>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default SideBar;
