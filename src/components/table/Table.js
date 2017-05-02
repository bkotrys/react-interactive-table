import React from 'react';
import HeadRow from './rows/HeadRow';
import BodyRow from './rows/BodyRow';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
} from 'material-ui/Table';

const CustomTable = ({pets, columnsNames}) => (
  <Table>
    <TableHeader>
      <HeadRow columnsNames={ columnsNames }/>
    </TableHeader>
    <TableBody>   
    {
      pets.map((pet, idx) => (
        <BodyRow key={ idx } pet={ pet }/>
      ))
    }
    </TableBody>
  </Table>
);

export default CustomTable

