import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers(
      messages: messagesReducer,
      messageText: messageText
    }),
    initialState,
    applyMiddleware(logger)
  )
);