import * as types from '@constants/Types';

export const setCurrencies = (firstCurrency, secondCurrency) => {
    return {
        type: types.FETCH_CURRENCIES_DATA,
        payload: {
            firstCurrency,
            secondCurrency
        },
    }
}