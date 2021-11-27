
import Item from "../productItem/Item";
import "./ProductList.css";
import Products from "./../../mocks/en-us/products.json";

function List() {
  let items = Products.results;

  return (
    <div style = {{display:'flex', flexDirection:'row'}}>
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
                    />
                  </div>
                );
                else{
                  return "";
                }
            })}
  </div>
  );
}

export default List;
