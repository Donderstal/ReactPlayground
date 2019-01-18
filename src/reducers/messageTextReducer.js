import { SEND_MESSAGE } from '../actions/actionTypes'

export default (state = '', action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
    console.log('messageTextReducer says: ' + action.payload)
      return action.payload
    default:
      return state
  }
}
