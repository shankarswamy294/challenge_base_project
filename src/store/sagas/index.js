import {all, fork} from 'redux-saga/effects';
import * as common from './common';

function* rootSaga() {
    yield all([
        ...Object.values(common),
    ].map(fork));
}

export default rootSaga;