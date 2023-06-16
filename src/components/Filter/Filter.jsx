import React from 'react';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(set(e.target.value));
  };

  return (
    <>
      <label>
        Find contact by name
        <FilterInput type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </>
  );
};

export default Filter;
