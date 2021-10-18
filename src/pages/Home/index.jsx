import React from 'react';

import Main from './containers/Main';
import Section from './containers/Section';
import Slider from './components/Slider';
import Carousel from './components/Carousel';
import Grid from './components/Grid';

import BannersMock from './mocks/en-us/featured-banners.json';
import CategoriesMock from './mocks/en-us/product-categories.json';
import ProductsMock from './mocks/en-us/featured-products.json';

const Home = () => (
    <Main>
        <Section>
            <Slider data={BannersMock} />
        </Section>
        <Section>
            <Carousel data={CategoriesMock} />
        </Section>
        <Section>
            <Grid data={ProductsMock} />
        </Section>
    </Main>
)


export default Home
