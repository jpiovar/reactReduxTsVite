import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import tableReducer from './table/table.reducers';
import tableSaga from './table/table.sagas';

const reducers = combineReducers({
  tableReducer
});

const sagaMiddleware = createSagaMiddleware();
const saga = [sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
      .concat(saga)
});

sagaMiddleware.run(tableSaga);

export default store;
