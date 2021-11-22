import { div } from "prelude-ls";
import Item from "../productItem/Item";
import "./ProductListPage.css";
import Products from "./../../mocks/en-us/products.json";
import SideBar from "../SideBar/SideBar";
import PaginationBar from "../PaginationBar/PaginationBar";
import { useState } from "react";

function ProductListPage({ Categories }) {
  let items = Products.results;
  
  const [ItemsStates,updateItemsStates] = useState(items);
  let maxItems = 0;
  const [CategoriesStates, updateCategoriesStates] = useState(Categories);

  const changeCategoryState = (id) => {
   //console.log(id);
   let arr=[];
   let arrCatSelecteds=[];
   for(let i in CategoriesStates){
     let cat=CategoriesStates[i];
     if(cat.id===id){
       cat.selected=!cat.selected;
     }
     if(cat.selected){
       arrCatSelecteds.push(cat.id);
     }
     arr.push({
      name: cat.name,
      id: cat.id,
      selected: cat.selected
    });
   }
   updateCategoriesStates(arr);

   if(arrCatSelecteds.length!==0){
    let arrItem=[];
   for(let i in items){
     let it=items[i];
     if(arrCatSelecteds.includes(it.data.category.id)){
     arrItem.push(it);
    }
   }
   updateItemsStates(arrItem);
  }else{
   updateItemsStates(items);
   }
  };

  return (
    <div class="float-container">
      <table>
        <tr>
          <td width="75%">
            {ItemsStates.map((element, i) => {
              //if(i<2){
              maxItems = i;
                //console.log(el.name.toLowerCase()+" "+element.category.toLowerCase() + " " + el.selected);
                
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
             
            //}
            })}
          </td>
          <td class="CategoriesSideBar" rowSpan={maxItems}>
            <SideBar
              Categories={CategoriesStates}
              event={changeCategoryState}
            ></SideBar>
          </td>
        </tr>
        <tr>
          <td>
            <PaginationBar></PaginationBar>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default ProductListPage;
/*title={element.data.name}
                        img={element.data.mainimage.url}
                        desc={element.data.short_description}
                        price={element.data.price}
                        category={element.data.category.slug} */