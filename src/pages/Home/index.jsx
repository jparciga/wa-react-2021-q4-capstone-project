import React from 'react'
import Main from './containers/Main';
import Section from './containers/Section';
import Slider from './components/Slider';
import Carousel from './components/Carousel';
import Grid from './components/Grid';

import BannersMock from './mocks/en-us/featured-banners.json';
import ProductsMock from './mocks/en-us/featured-products.json';
import CategoriesMock from './mocks/en-us/product-categories.json';

const Home = () => {
    return (
        <Main>
            <Section>
                <Slider data={BannersMock} />
            </Section>
            <Section>
                <Carousel data={ProductsMock} />
            </Section>
            <Section>
                <Grid data={CategoriesMock} />
            </Section>
        </Main>
    )
}

export default Home
