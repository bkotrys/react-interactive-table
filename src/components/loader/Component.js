import React from 'react';
import { Icon } from 'react-fa';
import styles from './Styles';
import PropTypes from 'prop-types';

const Loader = ({ label="" }) => (
	<div style={ styles.wrapper }>
		{ 
			label.length && (
				<span style={ styles.label }>{ label }</span>
			)
		}
		<Icon spin size="lg" name="spinner" />
	</div>
)

Loader.propTypes = {
	label: PropTypes.string
};

export default Loader;