import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Search as SearchIcon,
  ShoppingBag as ShoppingIcon,
} from 'react-feather';
import productCategories from '../../mocks/en-us/product-categories.json';
import useRoute from '../../hooks/useRoute';
import MenuButton from '../MenuButton';
import SideBar from '../SideBar';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: whitesmoke;
  z-index: 2;
  box-shadow: 4px 3px 21px -6px rgba(0, 0, 0, 0.32);
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: 0 auto;
  min-height: 2rem;
`;

const Title = styled.div`
  font-size: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: not-allowed;
  margin: 0 0.3rem;
`;

const Header = () => {
  const [, setRoute] = useRoute();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <MenuButton onClick={() => setIsMenuOpen(value => !value)} />
          <Title onClick={() => setRoute('/')}>ASBESTO</Title>
          <Button>
            <SearchIcon size={25} />
          </Button>
          <Button>
            <ShoppingIcon size={24} />
          </Button>
        </HeaderContainer>
      </StyledHeader>
      <SideBar categories={productCategories.results} open={isMenuOpen} />
    </>
  );
};

export default Header;
