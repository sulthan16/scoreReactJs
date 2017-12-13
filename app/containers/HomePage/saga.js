/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { API_URL } from 'constants/app';
import { makeSelectBerita } from 'containers/HomePage/selectors';
import request from 'utils/request';
import * as consts from './constants';
import * as actions from './actions';


export function* getBerita() {
  const data = yield select(makeSelectBerita('searchParams'));
  const requestURL = `${API_URL}/page/home/getData`;
  try {
    const result = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    yield put(actions.loadBeritaSuccess(result));
  } catch (err) {
    yield put(actions.loadBeritaError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeData() {
  yield takeLatest(consts.LOAD_BERITA, getBerita);
}
