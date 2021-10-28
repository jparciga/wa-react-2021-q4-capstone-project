import React from 'react';
import { ReactComponent as ImgLogo } from '../assets/logo.svg';
import styled from 'styled-components';

const Logo = ({ goHome }) => (
    <Container onClick={goHome} >
        <ImgLogo style={{ width: "5rem", height: "5rem" }} />
    </Container>
)

const Container = styled.div`
    padding: 10px;
`

export default Logo
