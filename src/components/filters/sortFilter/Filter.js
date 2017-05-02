import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SortFilter = ({ value, options, onSort }) => {
  const onSelect = (event, index, value) => onSort(value);

  return (
    <SelectField
      value={ value } 
      onChange={ onSelect }
      floatingLabelText="Sort by"
      floatingLabelFixed={ true }
    >
      {
        options.map((option, idx) => (
            <MenuItem 
              key={ idx + 1 } 
              value={ option } 
              primaryText={option} 
            />
        ))
      }
    </SelectField>
  )
}

export default SortFilter;