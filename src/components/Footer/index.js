import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 30px;
  background-color: floralwhite;
  padding: 2em;
  font-style: italic;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Ecommerce created during Wizeline’s Academy React Bootcamp
    </StyledFooter>
  );
};

export default Footer;
