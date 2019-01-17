import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import messagesReducer from './reducers/messagesReducer';
import messageTextReducer from './reducers/messageTextReducer';
const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      messages: messagesReducer,
      messageText: messageTextReducer
    }),
    initialState,
    applyMiddleware(logger)
  )
);
