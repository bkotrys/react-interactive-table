import React from 'react';
import HeadRow from './rows/headRow/Component';
import BodyRow from './rows/bodyRow/Component';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
} from 'material-ui/Table';

const CustomTable = ({ pets, columnsNames }) => (
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

