import React from 'react';
import {
  TableRow,
	TableHeaderColumn,
} from 'material-ui/Table';

const style = {
	cell: {
		textAlign: "center"
	}
}

const HeadRow = ({ columnsNames }) => (
  <TableRow>
    {
      columnsNames.map((name, idx) => (
        <TableHeaderColumn key={idx} style={ style.cell }> { name.toUpperCase() } </TableHeaderColumn>)
      )
    }
  </TableRow>
);

export default HeadRow;