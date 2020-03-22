export const SHOW_LOADER = 'SHOW_LOADER';
export const GET_BANK_DATA = 'GET_BANK_DATA';
export const BANK_DATA_RECEIVED = 'BANK_DATA_RECEIVED';

export const showLoader = (data) => ({
    type: SHOW_LOADER,
    data,
});

export const getBankData = (params) => ({
    type: GET_BANK_DATA,
    params
});

export const bankDataReceived = (data) => ({
    type: BANK_DATA_RECEIVED,
    data
});