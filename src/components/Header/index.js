import React from 'react';
import styled from 'styled-components';
import MenuButton from '../MenuButton';

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  background: whitesmoke;
  box-shadow: 4px 3px 21px -6px rgba(0, 0, 0, 0.32);
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: 0 auto;
  min-height: 2rem;
`;

const Title = styled.header`
  font-size: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  justify-self: end;
  color: gray;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <nav>
          <MenuButton />
        </nav>
        <Title>ASBESTO</Title>
        <div>
          <button>Search</button>
          <button>Cart</button>
        </div>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
