// @flow
import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import RatingList from './../../../../lists/rating/Component';
import styles from './Styles';

type Props = { data: Object };

const BodyRow = ({ data } : Props) : React$Element<TableRow> => {
	let content = null;
	
	return (
		<TableRow>
	    {
        Object.keys(data).map((info, idx) => {
        	if(info === "rating") {
        		content = <RatingList count={ data[info] } />
        	} else {
        		content = data[info];
        	}
        	
          return (
          	<TableRowColumn 
          		style={ styles.cell } 
          		key={ idx }> 
          			{ content }
      			</TableRowColumn>
        	)
        })
	    }
		</TableRow>
	)
};

export default BodyRow;