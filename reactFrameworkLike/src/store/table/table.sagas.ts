import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { TABLE_LOAD_GET, TABLE_LOAD_GET_FAIL, TABLE_LOAD_GET_SUCCESS } from './table.actions';
function tableLoadGetPromise(url: string): Promise<any> {
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
function* tableLoadGet(action: any): any {
  try {
    const tableData = yield call(tableLoadGetPromise, action.url);
    yield put({ type: TABLE_LOAD_GET_SUCCESS, payload: tableData });
  } catch (error: any) {
    yield put({ type: TABLE_LOAD_GET_FAIL, payload: error });
  }
}
function* tableSaga(): any {
  yield takeLatest(TABLE_LOAD_GET, tableLoadGet);
}

export default tableSaga;