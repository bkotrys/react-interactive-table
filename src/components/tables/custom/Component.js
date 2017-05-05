// @flow
import React from 'react';
import HeadRow from './rows/headRow/Component';
import BodyRow from './rows/bodyRow/Component';
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table';

type Props = {
  allData: Array<Object>,
  columnsNames: Array<string>
};

const CustomTable = ({ 
  allData, 
  columnsNames 
} : Props) : React$Element<Table> => (
  <Table>
    <TableHeader>
      <HeadRow columnsNames={ columnsNames }/>
    </TableHeader>
    <TableBody>   
    {
      allData.map((data, idx) => (
        <BodyRow key={ idx } data={ data }/>
      ))
    }
    </TableBody>
  </Table>
);

export default CustomTable

