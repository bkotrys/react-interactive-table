import React from 'react';
import { petService } from './../service';
import mockPets from './../mocks';
import HeadRow from './row/headRow';
import PetRow from './row/petRow';

class Table extends React.Component {
	render() { 
		return (
			<table>
				<thead>
					<HeadRow columnsNames={ this.props.columnsNames }/>
				</thead>
				<tbody>		
				{
					this.props.pets.map((pet, idx) => (
						<PetRow key={ idx } pet={ pet }/>
					))
				}
				</tbody>
			</table>
		) 
	};
}

export default Table

