import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './Styles'

const CheckboxFilter = ({ checked, name, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e.target.checked);
  };

  return (
    <Checkbox
      label={ name }
      defaultChecked={ checked }
      style={ styles }
      onCheck={ handleChange }
    />
  )
}

export default CheckboxFilter;