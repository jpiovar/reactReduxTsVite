import { TABLE_LOAD_GET, TABLE_LOAD_GET_FAIL, TABLE_LOAD_GET_SUCCESS } from './table.actions';
import { TableType, TableTypeEmpty } from './table.types';

export const initialStateTable: TableType = { data: null, loading: false, error: null };
const tableReducer = (state = initialStateTable, action: any): TableType | TableTypeEmpty | any => {
  switch (action.type) {
    case TABLE_LOAD_GET: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case TABLE_LOAD_GET_SUCCESS: {
      const newData = [...action.payload];
      return {
        ...state,
        loading: false,
        data: newData,
        error: null,
      };
    }
    case TABLE_LOAD_GET_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }    
};
export default tableReducer;