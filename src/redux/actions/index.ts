import types from '../types';

export const increment = (amount: number) => ({
  type: types.INCREMENT,
  payload: amount
});

export const decrement = (amount: number) => ({
  type: types.DECREMENT,
  payload: amount
});

export const loggin = () => ({
  type: types.LOG_IN
});

export const loggout = () => ({
  type: types.LOG_OUT
});