import PropTypes from "prop-types"
ImageCarousel.propTypes = {
    url: PropTypes.string,
    index: PropTypes.number
}
export default function ImageCarousel({url,index}){    
    return (
        <div key={index}>
            <img src={url} alt="Wizeline" className="image" key={index}></img>
        </div>
    )
}