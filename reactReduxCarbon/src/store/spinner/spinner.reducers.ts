import { START_SPINNER, STOP_SPINNER } from './spinner.actions';
import { SpinnerType } from './spinner.types';

const spinnerReducer = (state = { isOn: false }, action: {type: typeof START_SPINNER | typeof STOP_SPINNER}): SpinnerType => {
  switch (action.type) {
    case START_SPINNER:
      return { ... state, isOn: true };
    case STOP_SPINNER:
      return { ... state, isOn: false };
    default:
      return state; 
  }    
};

export default spinnerReducer;