import { all } from 'redux-saga/effects';
import PeopleSaga from './people/saga';

export default function* rootSaga() {
  yield all([
    PeopleSaga(),
  ]);
}
