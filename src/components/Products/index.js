import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  margin-bottom: 3rem;
`;

const ProductContent = styled.div`
  display: grid;
  justify-items: center;
  border-radius: 2px;
  border: solid 1px #cbc8c1;
  box-shadow: 2px 3px 5px -2px rgba(0, 0, 0, 0.32);
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 3rem;
`;

const Image = styled.img`
  width: 70%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
  background-color: linen;
  min-height: 6rem;
  border-top: solid 1px #cbc8c1;
  padding: 0.5rem 0;
`;

const ProductName = styled.div`
  color: black;
  font-size: 18px;
  padding-bottom: 0.3rem;
`;

const ProductPrice = styled.div`
  font-weight: 800;
  padding-bottom: 1rem;
`;

const Product = ({ name, background, tags, price, alt }) => (
  <ProductContent>
    <Image src={background} alt={alt} />
    <Description>
      <ProductName>{name}</ProductName>
      <ProductPrice>
        <b>{price} $</b>
      </ProductPrice>
      <div>{tags.join(', ')}</div>
    </Description>
  </ProductContent>
);

const Products = ({ products }) => {
  return (
    <>
      <Title>Featured products</Title>
      <ProductContainer>
        {products.map(
          ({
            id,
            tags,
            data: {
              name,
              price,
              mainimage: { url, alt },
            },
          }) => (
            <Product
              key={`product-${id}`}
              background={url}
              name={name}
              tags={tags}
              price={price}
              alt={alt}
            />
          )
        )}
      </ProductContainer>
    </>
  );
};

export default Products;
