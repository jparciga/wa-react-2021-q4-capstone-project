import {SliderData}  from '../../utils/SliderData'
import './slider.scss'
import { useState } from 'react'
import ImageSlider  from './ImageSlider'
export default function Slider(){
    const [current, setCurrent] = useState(0)
    const [urlSend, seturlSend] = useState('')
    const results = SliderData[0].results
    const url = results.map(slide=>slide.data.main_image.url)
    const length = url.length;
    //console.log(results[0])

    if(urlSend===''){
        seturlSend(url[0])
        setCurrent(current + 1)
    }
        

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        seturlSend(url[current])
      };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        seturlSend(url[current])
      };

       
    /*setTimeout( ()=>{
        nextSlide()
    },10000)*/
       
    
    return (
        <div className="slider">
            <button className="btn btn-left" onClick={prevSlide}>{String.fromCharCode(8592)}</button>
            <ImageSlider url={urlSend} index={current} active={true} ></ImageSlider>
            <button className="btn btn-right" onClick={nextSlide}>{String.fromCharCode(8594)}</button>
        </div>
    )
}