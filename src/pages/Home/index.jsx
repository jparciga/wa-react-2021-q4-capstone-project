import React from 'react';

import Main from './containers/Main';
import Section from './containers/Section';
import Slider from './components/Slider';
import Grid from './components/Grid';
import Product from './components/Product';

import BannersMock from './mocks/en-us/featured-banners.json';
import CategoriesMock from './mocks/en-us/product-categories.json';
import ProductsMock from './mocks/en-us/featured-products.json';

const Home = () => (
    <Main>
        <Section>
            <Slider data={BannersMock} />
        </Section>
        <Section>
            <Grid
                data={CategoriesToGridList(CategoriesMock)}
                columns={5}
            />
        </Section>
        <Section>
            <Grid
                data={ProductsToGridList(ProductsMock)}
                columns={6}
                CustomComponent={Product}
            />
        </Section>
    </Main>
)

const CategoriesToGridList = (data) => data.results.map(item => ({
    url: item.data.main_image.url,
    title: item.data.name
}))

const ProductsToGridList = (data) => data.results.map(item => ({
    url: item.data.mainimage.url,
    title: item.data.name,
    category : item.data.category.slug,
    price: item.data.price
}))




export default Home
