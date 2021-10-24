import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
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
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <BannerSlider banners={bannerData.results} />
            <ContentContainer>
              <Categories categories={categoryData.results} />
              <Products products={productData.results} />
            </ContentContainer>
          </Route>
          <Route path="/products">
            <ContentContainer>
              <h1>This is the Product List Page</h1>
            </ContentContainer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainPage;
