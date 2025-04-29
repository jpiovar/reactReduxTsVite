import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import tableReducer from './table/table.reducers';
import tableSaga from './table/table.sagas';
import spinnerReducer from './spinner/spinner.reducers';
import themeReducer from './theme/theme.reducers';

const reducers = combineReducers({
  spinnerReducer,
  tableReducer,
  themeReducer
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
