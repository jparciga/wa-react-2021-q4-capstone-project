//import logo from './../../imgs/mugiwara.jpg';
import "./CategoriesItem.css"
import Categories from "./../../mocks/en-us/product-categories.json";


function CategoriesItem(props){ 
  let categories_index=props.index;
  const category=Categories.results[categories_index];
  const category_name=category.data.name;
  const category_img=category.data.main_image.url;
  const category_img_alt=category.data.main_image.alt;

    return(
    <div class="categoryItem">
        <table class="categorytable"><tr>
            <td class="categoria"><img src={category_img} alt={category_img_alt} class="logo"/></td>
            </tr><tr>
        <td><h1> {category_name} </h1></td>
        
        </tr></table>
    </div>
)

}

export default CategoriesItem;