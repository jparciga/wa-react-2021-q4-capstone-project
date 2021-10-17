import PropTypes from "prop-types"
CardGrid.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    alt: PropTypes.string,
}
export default function CardGrid({url,name,category,price,alt}){
    return (
        <div className="card-grid">
            <img alt={alt} className="image" src={url} />
            <h3>{name}</h3>
            <span>{category}</span>
            <p>${price}</p>
        </div>
    )
}