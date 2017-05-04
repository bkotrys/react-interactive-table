import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Icon } from 'react-fa';
import styles from './Styles';
import PropTypes from 'prop-types';

const RatingList = ({ count = 0 }) => {
	let list = [];

	for(let i = 0; i < count; i++){
		list.push(
			<li key={ i }>
				<Icon style={ styles.icon } name="star" />
			</li>)
	}

	return (
		<ul style={ styles.ul }> { list } </ul>
	)
};

RatingList.propTypes = {
	count: PropTypes.number
};

export default RatingList;