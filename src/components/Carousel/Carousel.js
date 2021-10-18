import { useState } from 'react';
import data from '../../mocks/es-mx/product-categories.json';
import './Carousel.css';

const categories = data.results;

function Carousel() {
    const [slideID, setSlideID] = useState(0)
    
    function moveForward(e) {
        e.preventDefault();
        if (slideID === categories.length - 1) {
            setSlideID(0)
        } else {
            setSlideID(slideID + 1);
        }
    }
    
    function moveBackwards(e) {
        e.preventDefault();
        if (slideID === 0) {
            setSlideID(categories.length - 1)
        } else {
            setSlideID(slideID - 1);
        }
    }

    function changeSlide(e) {
        e.preventDefault();
        setSlideID(parseInt(e.target.id))
    }

    return (
        <div>
            <h1>Categorías</h1>
            <div className="Carousel">
                <div className="containers" key={categories[slideID].id}>
                    <img src={categories[slideID].data.main_image.url} alt={categories[slideID].data.name}/>
                    <h1 className="Info">{categories[slideID].data.name}</h1>
                </div>
                <a className="back" onClick={moveBackwards} href="/">&#10094;</a>
                <a className="forward" onClick={moveForward} href="/">&#10095;</a>
            </div>
            <div className="dots-slider">
                {categories.map((cat) => {
                    return (
                        <span className="dots" onClick={changeSlide} key={categories.findIndex((el) => el === cat)} id={categories.findIndex((el) => el === cat)}></span>
                    )
                })}
            </div> 
        </div>
    )
}

export default Carousel;