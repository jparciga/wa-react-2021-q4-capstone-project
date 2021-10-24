import React, { useState, useEffect } from 'react'
import Layout from './containers/Layout';
import SideBar from './containers/SideBar';
import Category from './components/Category';
import Content from 'containers/Content';
import Title from './components/Title'
import Grid from 'components/Grid';
import Product from 'components/Product';

import ProductCategoriesMock from 'mocks/en-us/product-categories.json';
import ProductsMock from 'mocks/en-us/products.json';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([...ProductsMock.results]);

    useEffect(() => {
        let products = [];
        if (selectedCategory) {
            products = ProductsMock.results.filter(product => product.data.category.id === selectedCategory);
        } else {
            products = ProductsMock.results;
        }

        setProducts(products);
    }, [selectedCategory])

    return (
        <Layout>
            <SideBar >
                {ProductCategoriesMock.results.map((category) => <Category
                    key={category.id}
                    category={category}
                    onClick={() => setSelectedCategory(category.id)}
                    isActive={selectedCategory === category.id}
                />)}
            </SideBar>
            <Content>
                <Title />
                <Grid
                    data={ProductsToGridList(products)}
                    columns={6}
                    CustomComponent={Product}
                />
            </Content>
        </Layout>
    )
}

const ProductsToGridList = (data) => data.map(item => ({
    url: item.data.mainimage.url,
    title: item.data.name,
    category: item.data.category.slug,
    price: item.data.price
}))


export default Products
