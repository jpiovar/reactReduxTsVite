
export const START_SPINNER = 'START_SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

export const StartSpinner = (): any => {
  // debugger;
  return {
    type: START_SPINNER,
  };
};

export const StopSpinner = (): any => {
  // debugger;
  return {
    type: STOP_SPINNER,
  };
};