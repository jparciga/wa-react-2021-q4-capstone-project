import { div } from 'prelude-ls';
import Item from '../productItem/Item';
import "./ProductList.css"
import Products from "./../../mocks/en-us/products.json";
//{"title":"","img":"","desc":""}
function List(props){ 
  /*  let items=[
        {"title":"Sombrero de paja","img":"https://pbs.twimg.com/media/CuqyqeyXYAAjuRe?format=jpg&name=large","desc":"El sombrero de paja (麦わら Mugiwara?) es, como su nombre indica, un sombrero que está hecho de paja. Tiene una cinta roja en el medio, Es uno de los principales símbolos de la serie. Es el objeto más querido por el protagonista de One Piece, Luffy. Tanto es así, que lo considera 'su tesoro'.[3][4] Es un objeto tan característico que ha adquirido un gran valor, principalmente emocional, para Luffy y los Piratas de Sombrero de Paja, y además, se convirtió en la forma por la que los civiles, piratas y Marine de todo el mundo conocen a Luffy y su tripulación, siendo éste el que los caracteriza. Es por él por lo que a Luffy se le conoce como «Luffy Sombrero de Paja»."},
        {"title":"Espada","img":"https://m.media-amazon.com/images/I/51fOtKzFjhL._AC_SL1076_.jpg","desc":"Espada de Zoro"},
        {"title":"Raid Suit","img":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f0217fc-079b-461e-8aed-ac483a70b521/dcyj8qf-434b6c8e-8bf3-4cc5-95b6-b8c29dd887b1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmMDIxN2ZjLTA3OWItNDYxZS04YWVkLWFjNDgzYTcwYjUyMVwvZGN5ajhxZi00MzRiNmM4ZS04YmYzLTRjYzUtOTViNi1iOGMyOWRkODg3YjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Aw_j9WCTUZRi1GiYBdr7xudQ4z_LvB0X47TNJsSl8M4","desc":"Raid Suit de Sanji"},
        {"title":"Clima Tact","img":"https://scontent.fcxl2-1.fna.fbcdn.net/v/t1.6435-9/94590136_550644729198476_7164211904510951424_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGsC6GtQs0fk3RyWzbPjCz7MLObQMrueLcws5tAyu54t1nZNPXVlB7FrcV-G9Hs_bcEsrFslfJFVlQY4xkLVdIp&_nc_ohc=o9620nkrrOsAX-nyBOJ&_nc_ht=scontent.fcxl2-1.fna&oh=bf31915922ca3e31aa85160004685dad&oe=61B76337","desc":"Clima Tact de Nami"},
        {"title":"Sombrero de Chopper","img":"https://m.media-amazon.com/images/I/514ffOR20SL._AC_SL1021_.jpg","desc":"Sombrerito de Chopper"},
 ];*/
 let items=Products.results;

    return(
        
    <div class="float-container">
    {items.map((element, i) => { 
            //if(i<3)
           return (
               <div class="float-child">
               <Item title={element.data.name} img={element.data.mainimage.url} desc={element.data.short_description} price={element.data.price} category={element.data.category.slug} width="100%" />
            </div>
               ) 
        })}

    </div>
)
}

export default List;