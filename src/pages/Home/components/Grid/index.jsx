import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import PropTypes from 'prop-types';

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

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    columns: PropTypes.number,
}

Grid.defaultProps = {
    columns: 6,
}


export default Grid
