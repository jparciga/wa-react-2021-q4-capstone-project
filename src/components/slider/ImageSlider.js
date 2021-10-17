import PropTypes from "prop-types"
ImageSlider.propTypes = {
    url: PropTypes.string,
    index: PropTypes.number,
    active: PropTypes.bool,
}
export default function ImageSlider({url,index,active}){
    return (
        <div
            className={active  ? 'slide active' : 'slide'}
            key={index}
          >
            <img src={url} alt="Wizeline" className="image" key={index}></img>
        </div>
    )
}