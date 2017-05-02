import React from 'react';
import MultipleChoiceFilters from './multipleChoiceFilters/Filters';
import SortFilter from './sortFilter/Filter';
import Paper from 'material-ui/Paper';

const Filters = ({filters, onFilter, onSort}) => { 
  const styles = {
    margin: 10,
    padding: 10
  };

  return (
    <Paper 
      zDepth={2} 
      style={ styles } 
      className="filters-wrapper"
    >
      <MultipleChoiceFilters
        label="Show pets by animal type:"
        filters={ filters }
        onFilter={ onFilter }
      />
      <SortFilter
        label="Sort By:"
        onSort={ onSort }
      />
    </Paper>
  ) 
}

export default Filters