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
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleExpandChange(expanded) {
    this.setState({ expanded: expanded });
  }
  handleToggle(event, toggle) {
    this.setState({ expanded: toggle });
  }
  render() {
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
        <CardActions expandable={ true } style={ Filters.styles.cardActions }>
          <Paper zDepth={ 2 } style={ Filters.styles.paper } className="filters-wrapper">
              <MultipleChoiceFilters
                label="Animals:"
                filters={ this.props.filters }
                onFilter={ this.props.onFilter }
              />
              <section style={ Filters.styles.rightFilters }>
                <SliderFilter 
                  label="Price:"
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
              </section>
          </Paper>
        </CardActions>
      </Card>
    ) 
  }
  static styles = {
    paper: {
      padding: "25px 25px 0",
      display: "flex"
    },
    rightFilters: {
      display: "flex",
      flex: "1 1 auto",
      marginLeft: 25,
      flexDirection: "column"
    },
    cardActions: {
      padding: "0 5px",
      marginLeft: 5
    }
  };
}

export default Filters