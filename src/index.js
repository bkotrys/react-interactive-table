import React from 'react';
import ReactDOM from 'react-dom';
import InteractiveTable from './components/interactiveTable';
import MockPets from './mocks';

ReactDOM.render(
  <InteractiveTable pets={ MockPets }/>,
  document.getElementById('root')
);
