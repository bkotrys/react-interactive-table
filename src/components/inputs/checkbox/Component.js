import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './Styles'
import PropTypes from 'prop-types';

const CheckboxInput = ({ name, checked = false, onChange }) => {
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
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxInput;