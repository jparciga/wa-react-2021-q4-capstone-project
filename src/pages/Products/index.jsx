import React, { useState, useEffect } from 'react'
import Layout from './containers/Layout';
import Title from './components/Title'
import SideBar from './containers/SideBar';
import Content from 'containers/Content';
import Grid from 'components/Grid';

import ProductCategoriesMock from 'mocks/en-us/product-categories.json';
import ProductsMock from 'mocks/en-us/products.json';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {

    }, [selectedCategory])



    return (
        <Layout>
            <SideBar >
            </SideBar>
            <Content>
                <Title />
                Grid of products
            </Content>
        </Layout>
    )
}

export default Products
