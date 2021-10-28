import React, { useState, useEffect } from 'react'
import Layout from './containers/Layout';
import SideBar from './containers/SideBar';
import Category from './components/Category';
import Content from 'containers/Content';
import Title from './components/Title'
import Grid from 'components/Grid';
import Product from 'components/Product';
import Pagination from './components/Pagination';
import Loading from 'components/Loading';

import ProductCategoriesMock from 'mocks/en-us/product-categories.json';
import ProductsMock from 'mocks/en-us/products.json';

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [products, setProducts] = useState([...ProductsMock.results]);


    useEffect(() => {
        const loadingInterval = setInterval(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearInterval(loadingInterval);
    }, [])

    useEffect(() => {
        let products = [];
        if (selectedCategories.length > 0) {
            products = ProductsMock.results.filter(product => selectedCategories.includes(product.data.category.id));
        } else {
            products = ProductsMock.results;
        }

        setProducts(products);
    }, [selectedCategories])

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    return (
        <Layout>
            <SideBar >
                {ProductCategoriesMock.results.map((category) => <Category
                    key={category.id}
                    category={category}
                    onClick={() => handleCategoryClick(category.id)}
                    isActive={selectedCategories.includes(category.id)}
                />)}
            </SideBar>
            {isLoading ? <Loading /> :
                <Content>
                    <Title />
                    <Grid
                        data={ProductsToGridList(products)}
                        columns={6}
                        CustomComponent={Product}
                    />
                    {products.length ? <Pagination /> : null}
                </Content>
            }
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
