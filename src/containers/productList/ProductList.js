import Item from '../productItem/Item';

function List(props){ 
    let items=[
        {"title":"Sombrero","img":"./../../imgs/sombrero_de_paja.png","desc":"Sombrero de Paja de Luffy"},
        {"title":"Espada","img":"./../../imgs/espada_de_Zoro.jpg","desc":"Espada de Zoro"},
        {"title":"Bota","img":"./../../imgs/raid_suit_de_Sanji.jpeg","desc":"Bota de Sanji"}
    ];
    return(
    <div>
    {items.map((element, i) => {         
           return (<Item title={element.title} img={element.img} desc={element.desc} />) 
        })}
    </div>
)
}

export default List;