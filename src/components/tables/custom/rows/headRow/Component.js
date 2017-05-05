// @flow
import React from 'react';
import { TableRow,TableHeaderColumn } from 'material-ui/Table';
import styles from './Styles';

type Props = { columnsNames: Array<string> };

const HeadRow = ({ columnsNames } : Props) : React$Element<TableRow> => (
  <TableRow>
    {
      columnsNames.map((name, idx) => (
        <TableHeaderColumn 
          key={idx} 
          style={ styles.cell }> 
            { name.toUpperCase() } 
        </TableHeaderColumn>)
      )
    }
  </TableRow>
);


export default HeadRow;