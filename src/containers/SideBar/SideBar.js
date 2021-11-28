import "./SideBar.css";

function SideBar({ Categories, event }) {
  return (
    <div style = {{display:'flex', flexDirection:'column'}}>
       <div class="CategoriesSideBarTitle">
              <h1>Categories</h1>
            </div>

            {Categories.map((element, i) => {
          return (
                <div
                  class={
                    element.selected ? "SideBarItemSelected" : "SideBarItem"
                  }
                  onClick={()=>{event(element.id); console.log("imprimí",element.id)}}
                >
                  <h1>{element.name}</h1>
                </div>
          );
        })}
      </div>
  );
}

export default SideBar;