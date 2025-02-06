export const TABLE_LOAD_GET = '[Table] Load get data';
export const TABLE_LOAD_GET_SUCCESS = '[Table] Load get data success';
export const TABLE_LOAD_GET_FAIL = '[Table] Load get data fail';

export const TableLoadGet = (url: string): any => {
  return {
    type: TABLE_LOAD_GET,
    url
  };
};

export const TableLoadGetSuccess = (): any => {
  return {
    type: TABLE_LOAD_GET_SUCCESS
  };
};

export const TableLoadGetFail = (): any => {
  return {
    type: TABLE_LOAD_GET_FAIL
  };
};