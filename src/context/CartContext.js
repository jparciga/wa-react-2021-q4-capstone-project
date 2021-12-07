import {useState, createContext} from "react";
// Product example
//  handleProducts({id:8237,name:"eii",qty:0},1);
const CartContext = createContext();

const CartProvider=({children})=>{
    
const [CartProducts,setProducts]=useState([]);

const handleProducts=(product, qty)=>{
    let existe=-1;
    let products=[];
    CartProducts.forEach((element,i) => {
        if(element.id===product.id){
            existe=i;
        }
        products.push(element);
    });
    if(existe===-1){
        products.push(product);
    }else{
        products[existe].qty+=qty;
    }
    setProducts(products);
};
const data = {CartProducts,handleProducts};
return <CartContext.Provider value = {data}>{children}</CartContext.Provider>;
}

export {CartProvider}
export default CartContext