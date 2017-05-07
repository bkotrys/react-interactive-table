// @flow
import React from 'react';
import MultipleChoiceFilters from './../../components/filters/multipleChoiceFilters/Component';
import SortFilter from './../../components/filters/sortFilter/Component';
import SliderFilter from './../../components/filters/sliderFilter/Component';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import styles from './Styles';

type Props = {
  filters: Object,
  price: number,
  sortedBy: string,
  onSort: Function,
  onTypeFilterChange: Function,
  onPriceFilterChange: Function,
  sortedOptions: Array<string>
};
type State = {     
  expanded: boolean
}; 
class Filters extends React.Component<any, Props, State> { 
  state: State = {
    expanded: false
  }
  handleExpandChange = (expanded: boolean) : void => {
    this.setState({ expanded: expanded });
  }
  handleToggle = (event: Event, toggle: boolean) : void => {
    this.setState({ expanded: toggle });
  }
  render() : React$Element<Card> {
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
                onFilter={ this.props.onTypeFilterChange }
              />
              <section style={ styles.rightFilters }>
                <SliderFilter 
                  label="Price:"
                  minRange={ 0 }
                  maxRange={ 1000 }
                  onChange={ this.props.onPriceFilterChange }
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