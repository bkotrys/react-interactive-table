import React from 'react';
import MultipleChoiceFilters from './multipleChoiceFilters/Filters';
import SortFilter from './sortFilter/Filter';
import SliderFilter from './sliderFilter/Filter';
import Paper from 'material-ui/Paper';

const Filters = ({ 
  filters, 
  onFilter, 
  onSort, 
  sortedOptions, 
  sortedBy, 
  onPriceFilter, 
  price
}) => { 
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
      <SliderFilter 
        label="Price"
        minRange={ 0 }
        maxRange={ 1000 }
        onChange={ onPriceFilter }
        value={ price }
      />
      <SortFilter
        label="Sort By:"
        value={ sortedBy }
        onSort={ onSort }
        options={ sortedOptions }
      />
    </Paper>
  ) 
}

export default Filters