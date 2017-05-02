import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const CheckboxFilter = ({ checked, name, onFilterChange }) => {
  const onChange = (e) => {
    onFilterChange(name, e.target.checked);
  };

  const styles = {
      marginBottom: 16,
  };

  return (
      <Checkbox
        label={ name }
        defaultChecked={ checked }
        style={ styles }
        onCheck={ onChange }
      />
  )
}

export default CheckboxFilter;