import { CarouselData } from "./CarouselData";
import ImageCarousel from "./ImageCarousel";
import './Carousel.scss'
export default function Carousel(){    
    const results = CarouselData[0].results    
    const images = results.map((carousel,index)=>{
        return <ImageCarousel key={index} url={carousel.data.main_image.url} index={index} active={true} ></ImageCarousel>        
    })      
    return (
        <div className="carousel">                        
            {images}           
        </div>
    )
}