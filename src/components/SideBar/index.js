import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  position: fixed;
  background-color: #f5f5f5;
  border-right: solid 1px #e3e2e0;
  height: 100%;
  top: 0;
  left: ${({ open }) => (open ? '0rem' : '-18rem')};
  overflow-x: hidden;
  transition: 0.4s;
  z-index: 1;
  width: 17rem;
`;

const UnorderedList = styled.ul`
  margin-top: 6rem;
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 0 2rem;
  font-size: 25px;
  text-align: center;
  margin: 1.5rem;
`;

const SideBar = ({ categories = [], open = false }) => {
  return (
    <MenuContainer open={open}>
      <UnorderedList>
        {categories.map(({ id, data: { name } }) => (
          <Item key={`category-list-${id}`}>{name}</Item>
        ))}
      </UnorderedList>
    </MenuContainer>
  );
};

export default SideBar;
