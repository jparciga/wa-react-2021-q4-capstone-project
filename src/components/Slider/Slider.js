import { useState } from 'react';
import data from '../../mocks/es-mx/featured-banners.json';
import './Slider.css';

const banners = data.results;

function Slider() {
    const [slideID, setSlideID] = useState(0)
    
    function moveForward(e) {
        e.preventDefault();
        if (slideID === banners.length - 1) {
            setSlideID(0)
        } else {
            setSlideID(slideID + 1);
        }
    }
    
    function moveBackwards(e) {
        e.preventDefault();
        if (slideID === 0) {
            setSlideID(banners.length - 1)
        } else {
            setSlideID(slideID - 1);
        }
    }

    function changeSlide(e) {
        setSlideID(parseInt(e.target.id))
    }

    return (
        <div>
        <h1>Banners</h1>
            <div className="Slider">
                <div className="containers" key={banners[slideID].id}>
                    <img src={banners[slideID].data.main_image.url} alt={banners[slideID].data.title}/>
                    <h1 className="Info">{banners[slideID].data.title}</h1>
                </div>
                <a className="back" onClick={moveBackwards} href="/">&#10094;</a>
                <a className="forward" onClick={moveForward} href="/">&#10095;</a>
            </div>
            <div className="dots-slider">
                {banners.map((cat) => {
                    return (
                        <span className="dots" onClick={changeSlide} key={banners.findIndex((el) => el === cat)} id={banners.findIndex((el) => el === cat)}></span>
                    )
                })}
            </div> 
        </div>
    )
}
export default Slider;