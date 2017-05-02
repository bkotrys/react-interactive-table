import React from 'react';
import Filter from './Filter';

class Filters extends React.Component {
	render() {
		let filters = this.props.filters;

		return (
			<ul>
				{ 
					Object.keys(filters).map((name, idx) => (
						<Filter 
							key={ idx }
							name={ name } 
							checked={ filters[name] }
							onFilterChange={ this.props.onFilter }
						/>
					))
				}
			</ul>
		)
	}
}

export default Filters;