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
      sortedBy: ""
    }
    this.filterPets = this.filterPets.bind(this);
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
    return pets.filter((pet) => {
      return this.state.filters[pet.animal];
    });
  }
  getSortedPets(pets) {
    const isAscending = this.state.sortedBy.endsWith("+"); 
    const sortedBy = this.state.sortedBy.slice(0, -1);
    return pets.sort((a, b) => isAscending ?
      (a[sortedBy] - b[sortedBy]) : (b[sortedBy] - a[sortedBy]));
  }
  getPets() {
    return this.getVisiblePets(this.getSortedPets(this.props.pets));
  }
  componentDidMount() {
    this.setState({
      filters: this.getInitialFiltersState()    
    })
  }
  filterPets(filterName, isChecked) {
    this.setState({
      filters: Object.assign(
      {}, 
      this.state.filters, 
      { [filterName]: isChecked }
      )
    })
  }
  sortBy(filterName) {
    this.setState({ sortedBy: filterName })
  }
  render() { 
    return (
      <div>
        <Filters
          filters={ this.state.filters }
          onFilter={ this.filterPets }
          onSort={ this.sortBy }
          sortedOptions={ ["rating", "price"] }
          sortedBy={ this.state.sortedBy }
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