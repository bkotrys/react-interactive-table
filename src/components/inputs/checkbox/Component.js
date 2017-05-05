//@flow   
import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import styles from './Styles'

type Props = { 
  name: string, 
  checked: boolean, 
  onChange: Function 
};

const CheckboxInput = ({ 
  name, 
  checked = false, 
  onChange 
} : Props ) : React$Element<Checkbox> => { 

  const handleChange = (e: Object) : void => { 
    onChange(name, e.target.checked);
  };

  return (
    <Checkbox
      label={ name }
      defaultChecked={ checked }
      style={ styles }
      onCheck={ handleChange }
    />
  );
};

export default CheckboxInput;