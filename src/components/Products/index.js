import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 4em;
  margin-left: 14%;
  margin-right: 14%;
`;

const ProductContainer = styled.div`
  display: grid;
  justify-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 7px -1px rgba(0, 0, 0, 0.68);

  div {
    margin: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Title = styled.div`
  margin: 1em;
  font-weight: 900;
  font-size: 30px;
`;

const Image = styled.img`
  width: 50%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  margin-bottom: 1rem;
`;

const Product = ({name, background, tags, price, alt}) => (
  <ProductContainer>
    <Image src={background} alt={alt} />
    <div>{name}</div>
    <div>{tags.join(', ')}</div>
    <div>
      <b>{price} $</b>
    </div>
  </ProductContainer>
);

const Products = ({products}) => {
  return (
    <Container>
      <Title>Our products</Title>
      <div className="grid-container">
        {products.map(
          ({
            id,
            tags,
            data: {
              name,
              price,
              mainimage: {url, alt},
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
      </div>
    </Container>
  );
};

export default Products;
