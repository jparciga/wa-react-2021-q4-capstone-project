import React from 'react';
import styled from 'styled-components';


const Portrait = ({ href, title, isActive }) => (
    <Container isActive={isActive}>
        <ImageTitle>{title}</ImageTitle>
        <Img src={href} title={title} />
    </Container>
)

const Container = styled.div`
    display: ${props => props.isActive ? "block" : "none"};
    transition: opacity 1s ease-out;
`

const ImageTitle = styled.h1`
  position: absolute;
  width: 70%;
  top: 80%;
  left: 8%;
  margin: 0 auto;
  color : white;
  text-shadow : 2px 2px 8px black;
  font-weight : bold;
  text-align: right;
  `
const Img = styled.img`
    width: 100%;
    border-radius: 2rem;
`

export default Portrait
