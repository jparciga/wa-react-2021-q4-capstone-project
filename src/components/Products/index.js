import React from 'react';
import { useHistory } from 'react-router-dom';
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

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 19rem;
  margin-bottom: 3rem;
`;

const Button = styled.div`
  background-color: #e9e1d2;
  border: none;
  cursor: pointer;
  color: #635f5f;
  font-size: 20px;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 2px 3px 5px -4px rgba(0, 0, 0, 0.32);
  text-align: center;
  transition: 0.2s ease-in-out;
  border: solid 1px transparent;

  &:hover {
    border: solid 1px #d4d1d1;
  }

  &:active {
    margin-left: 1px;
    background-color: #dedbd5;
  }
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
  const history = useHistory();
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
      <ButtonContainer>
        <div />
        <Button onClick={() => history.push('/products')}>
          View all products
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Products;
