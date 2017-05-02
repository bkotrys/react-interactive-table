import React from 'react';
import HeadRow from './rows/HeadRow';
import BodyRow from './rows/BodyRow';

class Table extends React.Component {
  render() { 
    return (
      <table>
        <thead>
          <HeadRow columnsNames={ this.props.columnsNames }/>
        </thead>
        <tbody>   
        {
          this.props.pets.map((pet, idx) => (
            <BodyRow key={ idx } pet={ pet }/>
          ))
        }
        </tbody>
      </table>
    ) 
  };
}

export default Table

