import React from 'react'
import styled from 'styled-components'

const Image = ({ url, title }) => {
    return (
        <Container>
            <Img src={url} title={title} />
        </Container>
    )
}

const Container = styled.div`
   transition: transform .2s; 
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

export default Image
