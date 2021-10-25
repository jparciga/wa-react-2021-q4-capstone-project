import classNames from "classnames";
import { useContext } from "react";
import Context from "../../context/Context";
import styles from './Products.module.scss';
import Nav from '../../components/nav/Nav';
import Products from "../../components/products/Products";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";


const ProductList = () => {

    const {carousel,products,writeFilter} = useContext(Context);
    const [filterCat,setFilterCat] = useState([]);
    

   

    useEffect(_=>{
      const filterProducts = products.results.filter(item=>item.data.category.id.includes(writeFilter));
      setFilterCat(filterProducts);


    },[writeFilter,products])

    return (
        <div className={classNames(styles.productList)}>

         <Nav {...carousel} />

        <div className={classNames(styles.productListContent)}>
        <h1>Product List</h1>
        <div className={classNames(styles.productListContentCards)}>
        { filterCat.length > 0 ? filterCat.map((item) => <Products key={item.id} {...item} />)
        :'No results found'}
        </div>
        <div className={classNames(styles.productListPagination)}>
          <Pagination/>
        </div>
        </div>

       
      
        </div>
    )
}

export default ProductList
