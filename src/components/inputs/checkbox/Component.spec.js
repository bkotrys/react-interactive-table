import React from 'react';
import { shallow } from 'enzyme';
import CheckboxComponent from './Component';  

it('renders without crashing', () => {
  shallow(<CheckboxComponent />);
}); 