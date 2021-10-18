import React from 'react'
import styled from 'styled-components'


const Search = () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchInput type="text" placeholder="Search"/>
    </div>
)

const SearchInput = styled.input`
    width: 80%;
    height: 3rem;
    border-radius: 2rem;
    font-size: 2rem;
    padding: 0%.6rem;
    &:focus-visible {
        outline-width: 0;
        height: 4rem;
    }
`

export default Search
