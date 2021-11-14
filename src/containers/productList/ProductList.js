import Item from '../productItem/Item';

function List(props){ 
    let items=[
        {"title":"Sombrero","img":"https://pbs.twimg.com/media/CuqyqeyXYAAjuRe?format=jpg&name=large","desc":"Sombrero de Paja de Luffy"},
        {"title":"Espada","img":"https://m.media-amazon.com/images/I/51fOtKzFjhL._AC_SL1076_.jpg","desc":"Espada de Zoro"},
        {"title":"Raid Suit","img":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f0217fc-079b-461e-8aed-ac483a70b521/dcyj8qf-434b6c8e-8bf3-4cc5-95b6-b8c29dd887b1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmMDIxN2ZjLTA3OWItNDYxZS04YWVkLWFjNDgzYTcwYjUyMVwvZGN5ajhxZi00MzRiNmM4ZS04YmYzLTRjYzUtOTViNi1iOGMyOWRkODg3YjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Aw_j9WCTUZRi1GiYBdr7xudQ4z_LvB0X47TNJsSl8M4","desc":"Raid Suit de Sanji"}
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