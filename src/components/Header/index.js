import React from 'react';
import styled from 'styled-components';
import {Search as SearchIcon, ShoppingBag as ShoppingIcon} from 'react-feather';
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

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: not-allowed;
  margin: 0 0.3rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <nav>
          <MenuButton />
        </nav>
        <Title>ASBESTO</Title>
        <Button>
          <SearchIcon size={25} />
        </Button>
        <Button>
          <ShoppingIcon size={24} />
        </Button>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
