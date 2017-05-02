import React from 'react';
import ReactDOM from 'react-dom';
import InteractiveTable from './components/InteractiveTable';
import MockPets from './mocks';

ReactDOM.render(
  <InteractiveTable pets={ MockPets }/>,
  document.getElementById('root')
);
