import "./Item.css"
function Item(props){
    const {img} = props;
    return(
        <div class="card">
        <div class="title"><h1>{props.title}</h1></div>
           <img src={img}  />

      <div class="container"><p >{props.desc}</p></div>
    </div>
    )
}
export default Item