import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  padding: 1.5em;
  background: whitesmoke;
  z-index: 1;
  box-shadow: 4px 3px 21px -6px rgba(0, 0, 0, 0.32);
`;

const Title = styled.header`
  font-weight: 600;
  font-size: 25px;
  text-decoration: underline;
`;

const Menu = styled.div`
  justify-self: end;
  color: gray;
`;

const Header = () => {
  return (
    <StyledHeader className="grid-container">
      <Title>ASBESTO</Title>
      <div />
      <Menu>Search | Shopping Cart</Menu>
    </StyledHeader>
  );
};

export default Header;
