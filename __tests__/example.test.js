import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from '../src/actions/actionTypes';
import * as messageActions from '../src/actions/messageActions';
import { init as websocketInit, emit, getMessages, mockServer } from '../src/extra/mockSocket';

const middlewares = [ thunk.withExtraArgument({ emit }) ];
const mockStore = configureMockStore( middlewares );

it( 'should update the stage name AND broadcast a message to the specified web socket', () => {
    const store = mockStore();

    // setup our required websockets on the mock store.
    websocketInit( store );

    // set our expected actions
    const expectedActions = [
      { 
        type: types.SEND_MESSAGE,
        payload: 'hey'
      }
    ];

    // set our expected emit messages
    const expectedEmit = [
      types.SEND_MESSAGE,
      {
        type: types.SEND_MESSAGE,
        payload: 'hey'
      }
    ];

    console.log('kroket')

    // dispatch the action creator we are testing on the mock store
    store.dispatch( messageActions.sendMessage( 'hey' ) );

    console.log('frikandel')

    // check to see that the actions match
    expect( store.getActions() ).to.eql( expectedActions );

    // check web socket comms SEND - do messages sent match expected?
    expect( getMessages() ).to.eql( expectedEmit );
    mockServer.emit(
      types.SEND_MESSAGE,
      {
        stageId: 1,
        stageTitle: 'stageWS'
      });

    //check web socket comms RECEIVE
    expect( store.getActions()[1] ).to.eql(
      {
        type: 'SEND_MESSAGE',
        payload: { stageId: 1, stageTitle: 'stageWS' } }
      );
  });