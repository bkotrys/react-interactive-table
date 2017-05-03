import React from 'react';
import CheckboxFilter from './CheckboxFilter';

const MultipleChoiceFilters = ({ filters, label, onFilter }) => {
  const styles = {
    ul: {
      padding: 5,
      margin: "10px 0"
    }
  };
  return (
    <div className="multiple-choice-filters">
      <span>{ label }</span>
      <ul style={ styles.ul }>
        { 
            Object.keys(filters).map((name, idx) => (
            <CheckboxFilter 
              key={ idx }
              name={ name } 
              checked={ filters[name] }
              onFilterChange={ onFilter }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default MultipleChoiceFilters;