import Item from "../productItem/Item";
import "./SearchPage.css";

function SearchPage({ Products, searchTerm }) {
  const { isLoading } = Products;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(Products, searchTerm);
   searchTerm=searchTerm.toUpperCase();
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
              let name=element.data.name.toUpperCase();
            if (name.includes(searchTerm)) {
              itemCount++;
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
    </div>
  );
}

export default SearchPage;
