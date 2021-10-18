import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2em;
  margin-left: 14%;
  margin-right: 14%;
`;

const Title = styled.div`
  margin: 1em;
  font-weight: 900;
  font-size: 30px;
`;

const Item = styled.div`
  border-radius: 5px;
  box-shadow: 2px 3px 5px -2px rgba(0, 0, 0, 0.32);
  background-color: oldlace;
`;

const CardName = styled.div`
  margin: 1em;
`;

const Image = styled.img`
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
`;

const Card = ({name, imgSrc, alt}) => (
  <Item>
    <CardName>{name}</CardName>
    <Image src={imgSrc} alt={alt} />
  </Item>
);

const Categories = ({categories}) => {
  return (
    <Container>
      <Title>Categories</Title>
      <div className="grid-container">
        {categories.map(
          ({
            id,
            data: {
              name,
              main_image: {alt, url},
            },
          }) => (
            <Card key={`category-${id}`} name={name} imgSrc={url} alt={alt} />
          )
        )}
      </div>
    </Container>
  );
};

export default Categories;
