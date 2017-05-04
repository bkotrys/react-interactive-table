import React from 'react';
import styles from './Styles';
import { Icon } from 'react-fa';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const ActionBar = ({ 
	title, 
	actionIcon,
	onChange,
	actionTooltipText, 
	actionTooltipPosition = "top-center",
	isTouch = false
}) => (
  <AppBar 
  	title={ title } 
  	iconElementLeft={     
  		(
  			<IconButton 
	  			tooltip={ actionTooltipText } 
	  			tooltipPosition={ actionTooltipPosition }
	  			touch={ isTouch }
	  			style={ styles.actionBtn }
	  			onTouchTap={ onChange } 
	  			>
						<Icon name={ actionIcon } />
				</IconButton>
			) 
		}
	/>
);

ActionBar.PropTypes = {
	title: PropTypes.string.isRequired,
	actionIcon: PropTypes.element.isRequired,
	onChange: PropTypes.func.isRequired,
	actionTooltipText: PropTypes.string,
	actionTooltipPosition: PropTypes.string,
	isTouch: PropTypes.bool
};

export default ActionBar;