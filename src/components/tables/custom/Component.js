import React from 'react';
import PropTypes from 'prop-types';
import HeadRow from './rows/headRow/Component';
import BodyRow from './rows/bodyRow/Component';
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table';

const CustomTable = ({ allData, columnsNames }) => (
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

CustomTable.propTypes = {
  allData: PropTypes.array.isRequired,
  columnsNames: PropTypes.array.isRequired
};

export default CustomTable

