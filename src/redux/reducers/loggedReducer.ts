import types from '../types';

type Action = {
  type: string,
  payload: boolean
}

const loggedReducer = (state = false, action: Action) => {
  switch (action.type) {
    case types.LOG_IN:
      return true;
    case types.LOG_OUT:
      return false;
  }
  return state;
}

export default loggedReducer;