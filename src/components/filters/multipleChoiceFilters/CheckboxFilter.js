import React from 'react';

const CheckboxFilter = ({ checked, name, onFilterChange }) => {
  const onChange = (e) => {
    onFilterChange(name, e.target.checked);
  };

  return (
    <label >
      <input 
        type="checkbox" 
        defaultChecked={ checked }
        onChange={ onChange }
      />  
      { name }
    </label>      
  )
}

export default CheckboxFilter;