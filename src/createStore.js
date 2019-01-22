import { createStore, applyMiddleware, combineReducers } from 'redux';
import messagesReducer from './reducers/messagesReducer';
import messageTextReducer from './reducers/messageTextReducer';
import thunk from 'redux-thunk';
import {init, emitCreate} from './extra/websocket.js';
export default (socket, initialState = {}) => {

  const emit = emitCreate(socket);
  const middleware = [ thunk.withExtraArgument({ emit }) ];
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
  init(store, socket);
  return store
};
