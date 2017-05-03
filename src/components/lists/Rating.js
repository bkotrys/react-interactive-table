import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Icon } from 'react-fa'

const styles = {
	ul: {
    listStyleType: "none",
    display: "flex",
    padding: 0,
    justifyContent: "center"
	},
	icon: {
		margin: "0 2px"
	}
}

const RatingList = ({ count }) => {
	let list = [];

	for(let i=0; i < count; i++){
		list.push(
			<li key={ i }>
				<Icon style={ styles.icon } name="star" />
			</li>)
	}

	return (
		<ul style={ styles.ul }> { list } </ul>
	)
};

export default RatingList;