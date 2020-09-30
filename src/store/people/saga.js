import actions from './actions';
import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import { Get } from 'service';

export function* FetchSaga() {
  yield takeLatest(actions.FETCH_REQUEST, function*({ meta }) {
    // call request to API
    try {
      const res = yield call(Get);
      console.log(res)
      if (res.status !== 200) {
        if (res.data.errors) {
          throw res.data.errors[0].msg;
        }
        throw res.data.message;
      }
      // Saving new Agents into state
      yield put({ type: actions.FETCH_SUCCESS, payload: res.data, meta });
    } catch (e) {
      yield put({
        type: actions.AGENCY_FAIL,
        payload: e,
        error: true,
        meta
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(FetchSaga),
  ]);
}
