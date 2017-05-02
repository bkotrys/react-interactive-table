import React from 'react';
import CheckboxFilter from './CheckboxFilter';

const MultipleChoiceFilters = ({ filters, label, onFilter }) => (
  <div className="multiple-choice-filters">
    <h3>{ label }</h3>
    <ul>
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

export default MultipleChoiceFilters;