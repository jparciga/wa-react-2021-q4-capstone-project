import React from 'react';
import styled from 'styled-components';
import useRoute from '../../hooks/useRoute';
import BannerSlider from '../BannerSlider';
import Categories from '../Categories';
import Products from '../Products';
import bannerData from '../../mocks/en-us/featured-banners.json';
import categoryData from '../../mocks/en-us/product-categories.json';
import productData from '../../mocks/en-us/featured-products.json';

const ContentContainer = styled.div`
  margin: 0 12%;
  padding: 3rem 1rem;
`;

const MainPage = () => {
  const [route] = useRoute();
  return (
    <>
      {route === '/' ? (
        <>
          <BannerSlider banners={bannerData.results} />
          <ContentContainer>
            <Categories categories={categoryData.results} />
            <Products products={productData.results} />
          </ContentContainer>
        </>
      ) : (
        <>
          <ContentContainer>
            <h1>This is the Product List Page</h1>
          </ContentContainer>
        </>
      )}
    </>
  );
};

export default MainPage;
