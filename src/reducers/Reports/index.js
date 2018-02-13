import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchStatus: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.TOGGLE_FETCH_STATUS: return {...state, fetchStatus: !state.fetchStatus};
        default:
            return state;
    }
}