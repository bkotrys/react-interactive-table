import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const BodyRow = ({ pet }) => (
	<TableRow>
	    {
	        Object.keys(pet).map((info, idx) => (
	            <TableRowColumn key={idx}>{ pet[info] }</TableRowColumn>
	        ))
	    }
	</TableRow>
);

export default BodyRow;