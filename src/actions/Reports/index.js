import * as types from '@constants/Types';

const getReport = (firstCurrency, secondCurrency) => {
    return {
        type: types.FETCH_CURRENCIES_DATA,
        payload: firstCurrency + secondCurrency,
    }
}
export const fetchData = () => dispatch => dispatch(getReport("USD", "CHF"));