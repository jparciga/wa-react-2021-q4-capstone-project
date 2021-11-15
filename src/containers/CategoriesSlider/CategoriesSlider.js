import React, { useState } from 'react';
import Categories from "../../mocks/en-us/product-categories.json";
import CategoriesItem from '../Categories/CategoriesItem';
import "./CategoriesSlider.css"
var timer=false;

const CategoriesSlider = ( ) => {
  const [current, setCurrent] = useState(0);
  const length = Categories.results.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Categories.results) || Categories.results.length <= 0) {
    return null;
  }
  setTimeout(() => {
    nextSlide();
    timer=true;
  }, 5000);
 
  return (
    <section className='slider'>
      <table class="categoryslidertable">
        <tr><th class="title" colSpan="5">Categories</th></tr>
        <tr>
          <td class="button"><button className='left-arrow' onClick={prevSlide} >prev category</button></td>
          <td class="category"><CategoriesItem index={current}></CategoriesItem></td>
          <td class="category"><CategoriesItem index={getNext(current,length,1)}></CategoriesItem></td>
          <td class="category"><CategoriesItem index={getNext(current,length,2)}></CategoriesItem></td>
          <td class="button"> <button className='right-arrow' onClick={nextSlide} >next category</button></td>
    </tr></table>
    </section>
  );
  
};

function getNext(current,length,index){
  return current+index > length - 1 ? 0 : current + index
   
}

export default CategoriesSlider;