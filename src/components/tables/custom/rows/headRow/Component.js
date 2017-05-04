import React from 'react';
import PropTypes from 'prop-types';
import { TableRow,TableHeaderColumn } from 'material-ui/Table';
import styles from './Styles';

const HeadRow = ({ columnsNames }) => (
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

HeadRow.propTypes = {
  columnsNames: PropTypes.array.isRequired
};

export default HeadRow;