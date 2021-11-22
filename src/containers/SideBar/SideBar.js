import "./SideBar.css";

function SideBar({ Categories, event }) {
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
        {Categories.map((element, i) => {
          return (
            <tr>
              <td>
                <div
                  class={
                    element.selected ? "SideBarItemSelected" : "SideBarItem"
                  }
                  onClick={()=>{event(element.id)}}
                >
                  <h1>{element.name}</h1>
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
