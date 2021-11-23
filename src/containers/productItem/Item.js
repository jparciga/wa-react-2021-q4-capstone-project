import "./Item.css"
function Item(props){
    const {img} = props;
    return(
        <div class="card">
        <div class="title"><h1  class="title">[{props.category}]{props.title}</h1>
        <h1> $ {props.price}</h1></div>
           <img class="itemimg" src={img}  />

      <div class="container"><h3>{props.desc}</h3></div>
    </div>
    )
}
export default Item