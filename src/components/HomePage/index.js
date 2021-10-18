import React from 'react';
import BannerSlider from '../BannerSlider';
import Categories from '../Categories';
import Products from '../Products';
import bannerData from '../../mocks/en-us/featured-banners.json';
import categoryData from '../../mocks/en-us/product-categories.json';
import productData from '../../mocks/en-us/featured-products.json';

const HomePage = () => {
  return (
    <div>
      <BannerSlider banners={bannerData.results} />
      <Categories categories={categoryData.results} />
      <Products products={productData.results} />
    </div>
  );
};

export default HomePage;
