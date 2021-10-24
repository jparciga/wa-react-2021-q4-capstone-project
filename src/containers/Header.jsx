import styled from 'styled-components';
import colors from '../constants/colors';


const Header = ({ children }) => (
    <Container>
        <Content>{children}</Content>
    </Container>
)

const Container = styled.div`
    top: 1rem;
    position: sticky;
    margin-bottom: 3rem;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 5rem auto 5rem;
    align-items: center;
    border-radius : 3rem;
    box-shadow: -2px 9px 64px -17px rgba(0,0,0,0.75);
    margin:  0 auto;
    padding: 0.5rem;
    background-color : ${colors.JELLYBEAN}46;
    width: 95%;
`

export default Header
