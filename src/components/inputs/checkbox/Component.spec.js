import React from 'react';
import { mount, shallow } from 'enzyme';
import CheckboxComponent from './Component';  
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import sinon from 'sinon'; 
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";

describe('Checkbox component', () => {
	const muiTheme = getMuiTheme();
 
	it('renders without crashing', done => {
		mount(<CheckboxComponent />, { 
			context: { muiTheme },
	    childContextTypes: { muiTheme: React.PropTypes.object }
		});
  	done();
	}); 

	it('set props correctly', done => {
		const props = {
			name: "test",
			checked: true,
			onChange: () =>{ }
		};
		const Container = shallow(<CheckboxComponent 
				name={ props.name }
				checked={ props.checked }
			/>, { 
			context: { muiTheme },
	    childContextTypes: { muiTheme: React.PropTypes.object }
		});   
		expect(Container.prop('label')).toEqual(props.name);
		expect(Container.prop('defaultChecked')).toEqual(props.checked);
		done();
	});

	it('correctly handle check event', done => {
		const onChangeSpy = sinon.spy();
		const Container = mount(<CheckboxComponent 
				onChange={ onChangeSpy }
			/>, {  
			context: { muiTheme }, 
	    childContextTypes: { muiTheme: React.PropTypes.object }
		});   
		//necessary for simulating material-ui component
		const inputNode = ReactDOM.findDOMNode(Container.find('input').node);
		TestUtils.Simulate.change(inputNode);
    expect(onChangeSpy.called).toBeTruthy();
		done();
	});
});
