import React, {useState} from "react";
import "./ProductSideFilter.scss";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import ProductGrid from "../productGrid/ProductGrid";
const ProductSideFilter = () => {
  const [productsToShow, setproductsToShow] = useState(products.results)
  const [filters, setFilters] = useState([])
  let addFilter = (filter) =>{
    filters.push(filter);
    setFilters(filters)
    updateProducts();
  }
  let removeFilter = (itemToRemove) =>{
    let tmpFilters = filters;
    tmpFilters.splice(tmpFilters.indexOf(itemToRemove), 1);
    setFilters(tmpFilters)
    updateProducts();
  }
  //Update the product list to send
  //Send to the productGrid only the ones that we need
  let updateProducts=() =>{
    let productsFiltered = []
    filters.forEach(filter => {
      products.results.forEach(product => {
        if(product.data.category.id===filter){
          productsFiltered.push(product)
        }
      });
    });
    productsFiltered = filters.length>0?[...new Set(productsFiltered)]:products.results;
    console.log("updated", filters)
    
    setproductsToShow(productsFiltered);
  }
  return (
    <div >
      <div className="sidebar">
        {categories.results.map((ele) => (
          <span onClick={()=>{
            if(filters.indexOf(ele.id)!==-1){
              removeFilter(ele.id);
            }else{
              addFilter(ele.id);
            }
            
          }}>{ele.data.name}</span>
        ))}
        <ul>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </div>
      <div className="gridContent">
        <ProductGrid
          products={productsToShow}
          categories={categories.results}
        ></ProductGrid>
      </div>
    </div>
  );
};

export default ProductSideFilter;
