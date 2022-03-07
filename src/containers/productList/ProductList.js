import Item from "../Item/Item";
import "./ProductList.css";

function List({ Products }) {
  const { isLoading } = Products;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  let items = Products.data.results;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
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
                id={element.id}
                stock={element.data.stock}
              />
            </div>
          );
        else {
          return "";
        }
      })}
    </div>
  );
}

export default List;
