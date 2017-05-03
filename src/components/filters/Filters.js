import React from 'react';
import MultipleChoiceFilters from './multipleChoiceFilters/Filters';
import SortFilter from './sortFilter/Filter';
import SliderFilter from './sliderFilter/Filter';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

class Filters extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }
  handleExpandChange(expanded) {
    debugger;
    this.setState({ expanded: expanded });
  }
  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };
  render() {
    const styles = {
      margin: 10,
      padding: 10
    };

    return (
      <Card expanded={ this.state.expanded } onExpandChange={ this.handleExpandChange }>
        <CardText>
          <Toggle
            toggled={ this.state.expanded }
            onToggle={ this.handleToggle }
            labelPosition="right"
            label="Filters"
          />
        </CardText>
        <CardActions expandable={ true }>
          <Paper zDepth={2} style={ styles } className="filters-wrapper">
              <MultipleChoiceFilters
                label="Show pets by animal type:"
                filters={ this.props.filters }
                onFilter={ this.props.onFilter }
              />
              <SliderFilter 
                label="Price"
                minRange={ 0 }
                maxRange={ 1000 }
                onChange={ this.props.onPriceFilter }
                value={ this.props.price }
              />
              <SortFilter
                label="Sort By:"
                value={ this.props.sortedBy }
                onSort={ this.props.onSort }
                options={ this.props.sortedOptions }
              />
          </Paper>
        </CardActions>
      </Card>
    ) 
  }
}

export default Filters