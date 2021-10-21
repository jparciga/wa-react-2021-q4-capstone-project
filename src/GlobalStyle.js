import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
  height: 100vh;
  margin: 0;
 }

 body {
  display: flex;
  flex-direction: column;
  font-family: 'Metropolis';
 }

 .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5em;
 }
`;

export default GlobalStyle;
