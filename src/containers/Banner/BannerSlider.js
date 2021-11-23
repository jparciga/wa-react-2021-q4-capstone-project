import React, { useState } from 'react';
//import Banners from "./../../mocks/en-us/featured-banners.json";
import Banner from './Banner';
var timer=false;

const BannerSlider = ( {banners}) => {
  const [current, setCurrent] = useState(0);
  const length = banners.results.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(banners.results) || banners.results.length <= 0) {
    return null;
  }
  setTimeout(() => {
    nextSlide();
    timer=true;
  }, 5000);
  let banner=banners.results[current];
  return (
    <section className='slider'>
      <table  width="100%">
        <tr  width="100%">
          <td width="80%"><Banner title={banner.data.title} banner_img={banner.data.main_image.url} img_alt={banner.data.main_image.alt} ></Banner></td>
          </tr>
      </table>
    </section>
  );
  
};

export default BannerSlider;
//<td width="80%"><Banner index={current}></Banner></td>

//<td width="10%"><button className='left-arrow' onClick={prevSlide} >next</button></td>
//<td width="10%"><button className='right-arrow' onClick={nextSlide} >next</button></td>