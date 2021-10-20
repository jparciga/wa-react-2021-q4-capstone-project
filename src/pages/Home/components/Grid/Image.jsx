import React from 'react'
import styled from 'styled-components';
import colors from '../../../../constants/colors';

const Image = ({ url, title }) => {
    return (
        <Container>
            <ImageTitle>{title}</ImageTitle>
            <Img src={url} title={title} />
        </Container>
    )
}

const Container = styled.div`
   transition: transform .2s;
   text-align: center;
   &:hover{
    transform: scale(1.5);
   }
`

const Img = styled.img`
    width: 80%;
    border-radius: 2rem;
    &:hover{
        box-shadow: -2px 9px 64px -17px rgba(0,0,0,0.75);
    }
`

const ImageTitle = styled.p`
  position: relative;
  width: 70%;
  top: 80%;
  margin: 0 auto;
  color : white;
  text-shadow : 2px 2px 8px black;
  font-weight : bold;
  `

export default Image
