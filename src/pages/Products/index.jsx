import React, { useState, useEffect } from 'react'
import Layout from './containers/Layout';
import SideBar from './containers/SideBar';
import Category from './components/Category';
import Content from 'containers/Content';
import Title from './components/Title'
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
                {ProductCategoriesMock.results.map((category) => <Category
                    key={category.id}
                    category={category}
                    onClick={() => setSelectedCategory(category.id)}
                />)}
            </SideBar>
            <Content>
                <Title />
                Grid of products
            </Content>
        </Layout>
    )
}

export default Products
