import React, { useState, useEffect } from 'react';
import List from '../List';
import styled from 'styled-components';
import useFilter from '../../../hooks/useFilter';
import Skeleton from '../Skeleton';

const CatalogContainer = styled.div`
  margin-top: 4rem;
`;

const processFilters = filters => {
  let areFiltersActive = false;

  for (const key in filters) {
    if (filters.hasOwnProperty(key) && filters[key]) {
      areFiltersActive = true;
      break;
    }
  }

  return areFiltersActive ? filters : null;
};

const Catalog = ({ products = [] }) => {
  const [activeFilters] = useFilter();
  const [isLoading, setIsLoading] = useState(true);
  const filters = processFilters(activeFilters);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(value => !value), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CatalogContainer>
      <h1>Our products</h1>
      {isLoading ? (
        <Skeleton amount={7} />
      ) : (
        <List products={products} filters={filters} pagination />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
