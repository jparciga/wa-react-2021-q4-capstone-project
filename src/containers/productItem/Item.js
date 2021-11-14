import "./Item.css"
function Item(props){
    const {img} = props;
    return(
        <div class="card">
        <div><h1>{props.title}</h1></div>
           <img src={img}  />

      <div class="container">{props.desc}</div>
    </div>
    )
}
export default Item