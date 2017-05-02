import React from 'react';
import {
  TableRow,
	TableHeaderColumn,
} from 'material-ui/Table';

const HeadRow = ({ columnsNames }) => (
  <TableRow>
    {
      columnsNames.map((name, idx) => (
        <TableHeaderColumn key={idx}> {name} </TableHeaderColumn>)
      )
    }
  </TableRow>
);

export default HeadRow;