import React from 'react';
import MultipleChoiceFilters from './multipleChoiceFilters/Filters';
import SortFilter from './sortFilter/Filter';

class Filters extends React.Component {
  render() { 
    return (
      <div className="filters-wrapper">
        <MultipleChoiceFilters
          label="Show pets by animal type:"
          filters={ this.props.filters }
          onFilter={ this.props.onFilter }
        />
        <SortFilter
          label="Sort By:"
          onSort={ this.props.onSort }
        />
      </div>
    ) 
  };
}

export default Filters