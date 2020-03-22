import axios from 'axios';
import { put, takeLatest, takeEvery} from 'redux-saga/effects';
import {LOGIN_REQUEST, loginResponse} from "../actions";
import Swal from 'sweetalert2';
import {service_url, getErrorCodeMessage, getXmlParsedData} from '../../Constants';

// function* loginRequest(action) {
//     try {
//         // axios.defaults.headers['SOAPAction'] = 'http://tempuri.org/LoginPS2';
//
//         const json = yield axios.post(service_url,action.data).then(response => {
//
//         });
//
//         yield put(loginResponse(true))
//
//     } catch (e) {
//         Swal.fire(
//             '',
//             'Failed To Login',
//             'error'
//         )
//     }
// }
//
// export function* getUsersSaga() {
//     yield takeLatest(LOGIN_REQUEST, loginRequest);
// }