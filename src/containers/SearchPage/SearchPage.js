import PaginationBar from "../PaginationBar/PaginationBar";
import Item from "../Item/Item";
import "./SearchPage.css";

function SearchPage({ Products, itemsPerPage = 20 }) {
  const { isLoading } = Products;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const getParamValueFromKey = (searchKey) => {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of params) {
      if (key === searchKey) return value;
    }
  };

  let searchTerm = getParamValueFromKey("q");

  searchTerm = searchTerm.toUpperCase();
  let items = Products.data.results;
  let itemCount = 0;
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      class="float-container"
      width="100%"
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          {items.map((element, i) => {
            let name = element.data.name.toUpperCase();
            if (name.includes(searchTerm)) {
              itemCount++;
              if (i >= itemsPerPage) return null;
              return (
                <div class="float-child">
                  <Item
                    title={element.data.name}
                    img={element.data.mainimage.url}
                    desc={element.data.short_description}
                    price={element.data.price}
                    category={element.data.category.slug}
                    id={element.id}
                    showDesc={true}
                  />
                </div>
              );
            } else {
              return <div></div>;
            }
          })}
        </div>
        {itemCount === 0 ? <h1>Not Matches Found</h1> : ""}
      </div>
      {itemCount === 0 ? (
        ""
      ) : (
        <PaginationBar
          pages={Math.ceil(itemCount / itemsPerPage)}
        ></PaginationBar>
      )}
    </div>
  );
}

export default SearchPage;
