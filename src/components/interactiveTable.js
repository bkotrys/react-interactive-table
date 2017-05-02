import React from 'react';
import { petService } from './../service';
import mockPets from './../mocks';
import Table from './table'

class InteractiveTable extends React.Component {
	render() { 
		return (
			<Table pets={ this.props.pets } />
		) 
	};
}

export default InteractiveTable;