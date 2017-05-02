import React from 'react';
import { petService } from './../service';
import Table from './table/Table' 
import MockPets from './../mocks';
import Filters from './filters/Filters';

class InteractiveTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {}
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
  getVisiblePets() {
    return this.props.pets.filter((pet) => {
      return this.state.filters[pet.animal]
    })
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
  sortBy(filter) {
    debugger;
  }
  render() { 
    return (
      <div>
        <Filters
          filters={ this.state.filters }
          onFilter={ this.filterPets }
          onSort={ this.sortBy }
        />
        <Table 
          pets={ this.getVisiblePets() } 
          columnsNames={ this.getColumnsNames() }
        />
      </div>
    ) 
  };
}

export default InteractiveTable;