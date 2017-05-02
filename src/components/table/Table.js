import React from 'react';
import HeadRow from './rows/HeadRow';
import BodyRow from './rows/BodyRow';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class CustomTable extends React.Component {
  render() { 
    return (
      <Table>
        <TableHeader>
          <HeadRow columnsNames={ this.props.columnsNames }/>
        </TableHeader>
        <TableBody>   
        {
          this.props.pets.map((pet, idx) => (
            <BodyRow key={ idx } pet={ pet }/>
          ))
        }
        </TableBody>
      </Table>
    ) 
  };
}

export default CustomTable

