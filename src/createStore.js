import { createStore, applyMiddleware, combineReducers } from 'redux';
import messagesReducer from './reducers/messagesReducer';
import messageTextReducer from './reducers/messageTextReducer';
import thunk from 'redux-thunk';
import {init, emit} from './extra/websocket.js';
const middleware = [ thunk.withExtraArgument({ emit }) ];

export default (initialState = {}) => {
  console.log('in Store!')
  const store = createStore(
    combineReducers({
      messages: messagesReducer,
      messageText: messageTextReducer
    }),
    initialState,
    applyMiddleware(
      ...middleware
    )
  );
  init(store)
  return store
};
