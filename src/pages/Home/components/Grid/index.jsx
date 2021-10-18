import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Grid = ({ data }) => {

    return (
        <Container>
            {data.results.map(item => <Image url={item.data.mainimage.url} title={item.data.name} />)}
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows: minmax(100px, auto);
`;


export default Grid
