import * as types from '@constants/Types';

const INITIAL_STATE = {
    fetchingReport: false,
    currenciesToFetch: {}
}

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.FETCH_CURRENCIES_DATA: return { state, currenciesToFetch: {
            ...payload.firstCurrency,
            ...payload.secondCurrency
        }};
        default: return state;
    }
}
