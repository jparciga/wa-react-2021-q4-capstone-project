import React from 'react';
import styled from 'styled-components';


const Slider = ({ href, title, isActive }) => (
    <Container isActive={isActive}>
        <Img src={href} title={title} />
    </Container>
)

const Container = styled.div`
    display: ${props => props.isActive ? "block" : "none"};
    transition: opacity 1s ease-out;
`
const Img = styled.img`
    width: 100%;
    border-radius: 2rem;
`

export default Slider
