//@flow
import React from 'react';
import styles from './Styles';
import { Icon } from 'react-fa';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

type Props = {
	title: string,
	actionIcon: string,
	onChange: Function,
	actionTooltipText: string,
	actionTooltipPosition?: string,
	isTouch?: boolean
};

const ActionBar = ({ 
	title, 
	actionIcon,
	onChange,
	actionTooltipText, 
	actionTooltipPosition = "top-center",
	isTouch = false
} : Props) : React$Element<AppBar> => (
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

export default ActionBar;