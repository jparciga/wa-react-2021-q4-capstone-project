import Button from "../Button/Button";
import {NavLink,Link} from 'react-router-dom';
import "./Item.css"

function Item({img, category, title, price, id}){

    return(
        <div class="card">
        <div class="title"><h1  class="title">[{category}]{title}</h1>
        <h1> $ {price}</h1></div>
           <img class="itemimg" src={img}  />
        
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button text={"Add to Cart"}/>
      <br/>&nbsp;
          <NavLink to={"/Product/"+id} >
        <Button text={"See More"}/>
      </NavLink></div>
    </div>
    )
}
export default Item