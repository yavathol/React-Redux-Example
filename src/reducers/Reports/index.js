import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchingReport: false,
    reportsList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_FETCHING_STATUS: return { ...state, fetchingReport: !state.fetchingReport }
        case types.SET_CURRENCIES_DATA: return { ...state, reportsList: state.reportsList.concat(action.payload) }
        default: return state;
    }
}
