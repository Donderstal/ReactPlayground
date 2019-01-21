import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from '../../../src/constants/actionTypes';
import * as stages from '../../../src/actions/messageActions';
import { init as websocketInit, emit, getMessages, mockServer } from '../.utility/websocket';

const middlewares = [ thunk.withExtraArgument({ emit }) ];
const mockStore = configureMockStore( middlewares );