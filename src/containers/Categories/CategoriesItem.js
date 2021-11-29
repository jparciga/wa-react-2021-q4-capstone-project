import "./CategoriesItem.css"
import Categories from "./../../mocks/en-us/product-categories.json";
import {NavLink} from 'react-router-dom';

function CategoriesItem(props){ 
  let categories_index=props.index;
  const category=Categories.results[categories_index];
  const category_name=category.data.name;
  const category_id=category.id;
  const category_img=category.data.main_image.url;
  const category_img_alt=category.data.main_image.alt;

    return(
    <div class="categoryItem">
        <table class="categorytable"><tr>
            <td class="categoria"><NavLink to={"/ProductList/"+category_id}><img src={category_img} alt={category_img_alt} class="logo"/></NavLink></td>
            </tr><tr>
        <td><h1> {category_name} </h1></td>
        
        </tr></table>
    </div>
)

}

export default CategoriesItem;