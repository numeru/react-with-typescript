import { all, fork, call, put, takeLatest, throttle } from 'redux-saga/effects';
import { getCountDone, getCountStart } from 'Reduxx/slices/counter-slice';
import axios, { AxiosResponse } from 'axios';

async function getCountRequest() {
  const response = await axios.get(`${process.env.REACT_APP_COUNTER_API}`);
  return response;
}
function* getCount() {
  const response: AxiosResponse<{ value: number }> = yield call(
    getCountRequest
  );
  const result = response.data.value;
  yield put(getCountDone(result));
}
function* watchGetCount() {
  yield throttle(2000, getCountStart, getCount);
}
export function* counterSaga() {
  yield all([fork(watchGetCount)]);
}
