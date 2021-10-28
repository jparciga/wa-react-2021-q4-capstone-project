import styled from 'styled-components';
import colors from '../constants/colors';

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    width: 100%;
    background-color: ${colors.MINERAL};
    text-align: center;
    border-top: 5rem;
    color: white;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
`

export default Footer
