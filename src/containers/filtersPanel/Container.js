import React from 'react';
import PropTypes from 'prop-types';
import MultipleChoiceFilters from './../../components/filters/multipleChoiceFilters/Component';
import SortFilter from './../../components/filters/sortFilter/Component';
import SliderFilter from './../../components/filters/sliderFilter/Component';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import styles from './Styles';

class Filters extends React.Component { 
  static propTypes = {
    filters: PropTypes.object.isRequired,
    price: PropTypes.number,
    sortedBy: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    onPriceFilter: PropTypes.func.isRequired,
    sortedOptions: PropTypes.array.isRequired
  };
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
        <CardActions expandable={ true } style={ styles.cardActions }>
          <Paper zDepth={ 2 } style={ styles.paper } className="filters-wrapper">
              <MultipleChoiceFilters
                label="Animals:"
                filters={ this.props.filters }
                onFilter={ this.props.onFilter }
              />
              <section style={ styles.rightFilters }>
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
}

export default Filters