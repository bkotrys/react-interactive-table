import React from 'react';
import Root from './Container';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import { petService } from './../../service';

sinonStubPromise(sinon);



describe("Root", () => { 
	var Container, instance;

	beforeEach(() => {
		Container = mount(<Root />);
		instance = Container.instance();
	});

	it('renders without crashing', done => {
	  shallow(<Root />);
	  done();
	});

	describe("on initialize", () => {
		it('should set correctly default state', done => {
		   const state = instance.state;

		   expect(state).toEqual({
		      pets: [],
		      showLoader: true,
		      errorMsg: ""
		    }); 

		   done();
		}); 
	});

	describe("when component did mount", () => {
		it('data should be loaded', done => {
			instance.getData = sinon.spy()
	   	instance.componentDidMount();
	   	expect(instance.getData.called).toBeTruthy();
	   	done();
		});
	});

	describe("when fetching data", () => {
		describe("comes correctly", () => {
			it('data should be handle successfully', done => {
	   		var sandbox = sinon.sandbox.create();
		   	petService.fetch = sandbox.stub().returnsPromise();
		   	petService.fetch.resolves([]);
		   	instance.onSuccess = sandbox.spy();

		   	instance.getData()
		   	expect(instance.onSuccess.called);
		   	sandbox.restore();
		   	done();
			});

			it('state should be updated correctly', done => {
	   		const mockResponse = [{ animal: "lion" }, { animal: "cat" }];
	   		instance.setState = sinon.spy();
 
	   		instance.onSuccess(mockResponse);
	   		expect(instance.setState.getCall(0).args[0]).toEqual({
	   			pets: mockResponse,
	   			showLoader: false,
	   			errorMsg: ""
	   		});
	   		done();
			});
		})

		describe("failed", () => {
			it('error should be handle', done => {
	   		var sandbox = sinon.sandbox.create();
		   	petService.fetch = sandbox.stub().returnsPromise();
		   	petService.fetch.rejects([]);
		   	instance.onError = sandbox.spy();

		   	instance.getData()
		   	expect(instance.onError.called);

		   	sandbox.restore();
		   	done();
			});
		})
	})
});
