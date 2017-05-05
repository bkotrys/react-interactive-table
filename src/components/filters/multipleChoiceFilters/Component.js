// @flow
import React from 'react';
import Checkbox from './../../inputs/checkbox/Component';
import styles from './Styles';

type Props = {
  filters: Object,
  label: string | number,
  onFilter: Function
};

const MultipleChoiceFilters = ({ 
  filters, 
  label, 
  onFilter 
} : Props) : React$Element<any> => {
  return (
    <div className="multiple-choice-filters">
      <span>{ label }</span>
      <ul style={ styles.ul }>
        { 
          Object.keys(filters).map((name, idx) => (
            <Checkbox 
              key={ idx }
              name={ name } 
              checked={ filters[name] }
              onChange={ onFilter }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default MultipleChoiceFilters;