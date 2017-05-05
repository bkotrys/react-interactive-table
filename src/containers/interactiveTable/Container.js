// @flow
import React from 'react';
import Table from './../../components/tables/custom/Component' ;
import Filters from './../filtersPanel/Container';
import styles from './Styles';

type Props = { pets: Array<Object> };
type State = {     
  filters: Object,
  sortedBy: string,
  maxPrice: number,
  price: number
}; 

class InteractiveTable extends React.Component<any, Props, State> {
  state: State = {
    filters: {},
    sortedBy: "",
    maxPrice: 0,
    price: 0
  }
  get columnsNames() : Array<string> {
    const pets = this.props.pets;
    return pets.length ? Object.keys(pets[0]) : [];
  }
  get pets() : Array<Object> { 
    return this.getPetsIncludedInPrice(
            this.getSortedPets(
              this.getVisiblePets(
                this.props.pets
                )
              )
            );
  }
  getInitialFiltersState() : Object {
    return this.props.pets.reduce(function(map, petData) {
        map[petData.animal] = true;
        return map;
    }, {});
  }
  getVisiblePets(pets: Array<Object>) : Array<Object> {
    return pets.filter((pet) => this.state.filters[pet.animal]);
  }
  getSortedPets(pets: Array<Object>) : Array<Object> {
    const isAscending = this.state.sortedBy.endsWith("+"); 
    const sortedBy = this.state.sortedBy.slice(0, -1);
    return pets.sort((a, b) => isAscending ?
      (a[sortedBy] - b[sortedBy]) : (b[sortedBy] - a[sortedBy]));
  }
  getPetsIncludedInPrice(pets: Array<Object>) : Array<Object> {
    return pets.filter((pet) => pet.price <= this.state.price);
  }
  componentDidMount() : void {
    this.setState({
      filters: this.getInitialFiltersState(),
      price: 1000 // should be get from service    
    })
  }
  filterByAnimalType = (filterName: string, isChecked: boolean) : void => {
    this.setState({
      filters: Object.assign(
        {}, this.state.filters, { [filterName]: isChecked }
      )
    })
  }
  filterByPrice = (currentPrice: number) : void => {
    this.setState({ price: currentPrice })
  }
  sortBy = (filterName: string) : void => {
    this.setState({ sortedBy: filterName })
  }
  render() : React$Element<any> { 
    return (
      <section>
        { this.props.pets.length ?
          (
            <div>
              <Filters
                filters={ this.state.filters }
                onFilter={ this.filterByAnimalType }
                onSort={ this.sortBy }
                sortedOptions={ ["rating", "price"] }
                sortedBy={ this.state.sortedBy }
                onPriceFilter={ this.filterByPrice }
                price={ this.state.price }
              />
              <Table 
                allData={ this.pets } 
                columnsNames={ this.columnsNames }
              />
            </div>
          )
        :
          (
            <p style={ styles.noData }>
              There are no data. Reload data!
            </p>
          )
        }
      </section>
    ) 
  };
}

export default InteractiveTable;