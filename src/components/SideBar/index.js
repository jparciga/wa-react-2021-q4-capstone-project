import React from 'react';
import styled from 'styled-components';
import useFilter from '../../hooks/useFilter';

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
  padding: 0.5rem 2rem;
  font-size: 23px;
  text-align: center;
  margin: 1.5rem;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  border-bottom: solid 3px
    ${({ isActive }) => (isActive ? '#d0c0a7' : 'transparent')};
`;

const SideBar = ({ categories = [], open = false }) => {
  const [activeFilters, setActiveFilters] = useFilter();

  const onFilterClick = filterId => {
    const isActive = activeFilters[filterId] || false;
    setActiveFilters(filters => ({
      ...filters,
      [filterId]: !isActive,
    }));
  };

  return (
    <MenuContainer open={open}>
      <UnorderedList>
        {categories.map(({ id, data: { name } }) => (
          <Item
            key={`category-list-${id}`}
            isActive={activeFilters[id]}
            onClick={() => onFilterClick(id)}
          >
            {name}
          </Item>
        ))}
      </UnorderedList>
    </MenuContainer>
  );
};

export default SideBar;
