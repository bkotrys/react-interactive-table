import React from 'react';
import { petService } from './../service';
import mockPets from './../mocks';
import Table from './table'
import MockPets from './../mocks';
import Filters from './Filters';

class InteractiveTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {}
		}
		this.filterPets = this.filterPets.bind(this)
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
			debugger;
			return this.state.filters[pet.animal]
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
	componentDidMount() {
		this.setState({
			filters: this.getInitialFiltersState()
		})
	}
	render() { 
		return (
			<div>
				<Table 
					pets={ this.getVisiblePets() } 
					columnsNames={ this.getColumnsNames() }
				/>
				<Filters
					filters={ this.state.filters }
					onFilter={ this.filterPets }
				/>
			</div>
		) 
	};
}

export default InteractiveTable;