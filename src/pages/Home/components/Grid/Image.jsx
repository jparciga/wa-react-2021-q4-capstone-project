import React from 'react'
import styled from 'styled-components';
import ImageTitle from '../Texts/ImageTitle';

const Image = ({ url, title, children }) => (
    <Container>
        <ImageTitle>{title}</ImageTitle>
        {children}
        <Img src={url} title={title} />
    </Container>
)

const Container = styled.div`
   transition: transform .2s;
   text-align: center;
   &:hover{
    transform: scale(1.5);
    z-index : 5;
   }
`

const Img = styled.img`
    width: 80%;
    border-radius: 2rem;
    &:hover{
        box-shadow: -2px 9px 64px -17px rgba(0,0,0,0.75);
    }
`


export default Image
