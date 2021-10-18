import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Grid = ({ data, columns }) => (
    <Container columns={columns} >
        {data && data.map(item => <Image url={item.url} title={item.name} />)}
    </Container >
)

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns || 6},1fr);
    grid-auto-rows: minmax(100px, auto);
`;


export default Grid
