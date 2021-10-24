import React from 'react'
import Button from 'components/Button';
import styled from 'styled-components';

const Pagination = () => {
    return (
        <Container>
            <Button>Prev</Button>
            <p>Page 1 of 4</p>
            <Button>Next</Button>
        </Container>
    )
}


const Container = styled.div`
    text-align: center;
    padding: 4rem;
    & > p { 
        display: inline-block;
        margin: 1rem; 
    }
`;

export default Pagination
