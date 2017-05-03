import React from 'react';
import { petService } from './../service';
import Table from './table/Table' 
import MockPets from './../mocks';
import Filters from './filters/Filters';

class InteractiveTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      sortedBy: "",
      maxPrice: 0
    }
    this.filterByAnimalType = this.filterByAnimalType.bind(this);
    this.filterByPrice = this.filterByPrice.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }
  getColumnsNames() {
    const pets = this.props.pets;
    return pets.length ? Object.keys(pets[0]) : [];
  }
  getInitialFiltersState() {
    return this.props.pets.reduce(function(map, petData) {
        map[petData.animal] = true;
        return map;
    }, {});
  }
  getVisiblePets(pets) {
    return pets.filter((pet) => this.state.filters[pet.animal]);
  }
  getSortedPets(pets) {
    const isAscending = this.state.sortedBy.endsWith("+"); 
    const sortedBy = this.state.sortedBy.slice(0, -1);
    return pets.sort((a, b) => isAscending ?
      (a[sortedBy] - b[sortedBy]) : (b[sortedBy] - a[sortedBy]));
  }
  getPetsIncludedInPrice(pets) {
    return pets.filter((pet) => pet.price <= this.state.price);
  }
  getPets() { 
    return this.getPetsIncludedInPrice(
            this.getSortedPets(
              this.getVisiblePets(
                this.props.pets
                )
              )
            );
  }
  componentDidMount() {
    this.setState({
      filters: this.getInitialFiltersState(),
      price: 1000 // should be get from service    
    })
  }
  filterByAnimalType(filterName, isChecked) {
    this.setState({
      filters: Object.assign(
        {}, this.state.filters, { [filterName]: isChecked }
      )
    })
  }
  filterByPrice(currentPrice) {
    this.setState({ price: currentPrice })
  }
  sortBy(filterName) {
    this.setState({ sortedBy: filterName })
  }
  render() { 
    return (
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
          pets={ this.getPets() } 
          columnsNames={ this.getColumnsNames() }
        />
      </div>
    ) 
  };
}

export default InteractiveTable;