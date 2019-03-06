import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Set searchfield functionality', () => {
    it('should create action to search robots', () => {
        const text = 'hello';
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text,
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('Request robots functionality', () => {
    it('handles requesting robots api', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        }
        expect(action[0]).toEqual(expectedAction); 
    });
    // it('handles REQUEST_ROBOTS_SUCCESS', () => {

    // });
});
