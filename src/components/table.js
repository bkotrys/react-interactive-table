import React from 'react';
import { petService } from './../service';
import mockPets from './../mocks';
import HeadRow from './rows/HeadRow';
import BodyRow from './rows/BodyRow';

const Table = ({columnsNames, pets}) => (
  <table>
    <thead>
      <HeadRow columnsNames={ columnsNames }/>
    </thead>
    <tbody>   
    {
      pets.map((pet, idx) => (
        <BodyRow key={ idx } pet={ pet }/>
      ))
    }
    </tbody>
  </table>
) 


export default Table

