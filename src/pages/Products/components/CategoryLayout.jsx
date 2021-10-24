import styled from "styled-components";


const CategoryLayout = styled.div`
text-align: center;
    & > .title {
        top : 50%;
        font-size: 2rem;
        color : black;
    }

    & > img {
            border : ${props => props.isActive ? "solid 0.2em #ccc" : "none"};
     }
`

export default CategoryLayout;