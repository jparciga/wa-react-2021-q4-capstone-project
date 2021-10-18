import React from 'react'
import Slider from '../slider/Slider'

const Home = (props) => {
    return (
      <div>
        <Slider slides={props.slides}></Slider>
      </div>
    );
}

export default Home
