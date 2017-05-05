import React from 'react';
import Root from './Container';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe("Root", () => {
	it('renders without crashing', () => {
	  shallow(<Root />);
	});

	describe("on initialize", () => {
		it('should set correctly default state', done => {
		   const Container = mount(<Root />);
		   const state = Container.instance().state;

		   expect(state).toEqual({
		      pets: [],
		      showLoader: true,
		      errorMsg: ""
		    });

		   done();
		});
	});

	describe("when component did mount", () => {
		it('data should loaded', (done) => {
			const Container = mount(<Root />);
	   	const instance = Container.instance();
	   	const spy = sinon.spy(instance.getData);
	   	instance.componentDidMount();
	   	expect(spy.called).toBeTruthy();
	   	spy.restore();
	   	done();
		})
	});
});
