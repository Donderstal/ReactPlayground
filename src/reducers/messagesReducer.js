import RECEIVE_MESSAGE from '../actions/actionTypes'

export default (state = [], action = {}) => {
    switch (action.type) {
        case RECEIVE_MESSAGE:
            return action.payload
        default:
            return state
    }
}