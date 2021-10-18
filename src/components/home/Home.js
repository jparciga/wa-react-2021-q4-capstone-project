import React from 'react'
import Slider from '../slider/Slider'
import CategoryCarousel from '../categoryCarousel/CategoryCarousel';

const Home = (props) => {
    return (
      <div>
        <Slider slides={props.slides}></Slider>
        <CategoryCarousel categories={props.categories}></CategoryCarousel>
      </div>
    );
}

export default Home
