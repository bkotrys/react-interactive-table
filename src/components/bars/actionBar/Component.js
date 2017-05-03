import React from 'react';
import styles from './Styles';
import { Icon } from 'react-fa';

import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

const ActionBar = ({ 
	title, 
	actionIcon,
	actionTooltipText, 
	actionTooltipPosition = "top-center",
	isTouch = false,
	onChange
}) => (
  <AppBar 
  	title={ title } 
  	iconElementLeft={     
  		(<IconButton 
  			tooltip={ actionTooltipText } 
  			tooltipPosition={ actionTooltipPosition }
  			touch={ isTouch }
  			style={ styles.actionBtn }
  			onTouchTap={ onChange } 
  			>
				<Icon name={ actionIcon } />
		</IconButton>) 
	}
	/>
);

export default ActionBar;