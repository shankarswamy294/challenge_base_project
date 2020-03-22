import axios from 'axios';
import { put, takeLatest, takeEvery} from 'redux-saga/effects';
import {bankDataReceived, GET_BANK_DATA, LOGIN_REQUEST, loginResponse} from "../actions";
import Swal from 'sweetalert2';

function* getBankDataRequest(action) {
    try {
        const json = yield axios.get('http://starlord.hackerearth.com/bankAccount', action.params).then(response => {
            return response.data
        });

        yield put(bankDataReceived(json))

    } catch (e) {
        Swal.fire(
            '',
            'Failed To Get Bank Data',
            'error'
        )
    }
}

export function* getBankDataSaga() {
    yield takeLatest(GET_BANK_DATA, getBankDataRequest);
}