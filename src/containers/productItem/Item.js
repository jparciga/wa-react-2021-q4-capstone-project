import "./Item.css"
function Item(props){
    return(
        <div class="card">
        <div><h1>{props.title}</h1></div>
        <p>{props.img}</p>
           <img src={props.img} />

      <div>{props.desc}</div>
    </div>
    )
}
export default Item