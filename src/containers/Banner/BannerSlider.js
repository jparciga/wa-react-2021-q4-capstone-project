import React, { useState } from 'react';
import Banners from "../../mocks/featured-banners.json";
import Banner from './Banner';

const BannerSlider = ( ) => {
  const [current, setCurrent] = useState(0);
  const length = Banners.results.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Banners.results) || Banners.results.length <= 0) {
    return null;
  }
  setTimeout(() => {
    nextSlide();
  }, 7000);
  return (
    <section className='slider'>
    <Banner index={current}></Banner>
      <button className='left-arrow' onClick={prevSlide} >prev</button>
      <button className='right-arrow' onClick={nextSlide} >next</button>
    </section>
  );
};

export default BannerSlider;
/*   return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );*/