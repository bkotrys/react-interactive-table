import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RatingList from './../../lists/Rating';

const style = {
	cell: {
		textAlign: "center"
	}
}

const BodyRow = ({ pet }) => {
	let content = null;
	return (
		<TableRow>
		    {
		        Object.keys(pet).map((info, idx) => {
		        	if(info === "rating") {
		        		content = <RatingList count={ pet[info] } />
		        	} else {
		        		content = pet[info];
		        	}
		        	
	            return (
	            	<TableRowColumn 
	            		style={ style.cell } 
	            		key={ idx }> 
	            			{ content }
          			</TableRowColumn>
            	)
		        })
		    }
		</TableRow>
	)
}

export default BodyRow;