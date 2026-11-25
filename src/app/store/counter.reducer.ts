import { createReducer, on } from '@ngrx/store';
import { onDecrementCounter, onIncrementCounter, onResetCounter } from './counter.action';

export const counterReducer = createReducer(
  0,
  on(onIncrementCounter, (currentState) => {
    debugger;
    return currentState + 1;
  }),
  on(onDecrementCounter, (state) => {
    debugger;
    return state - 1;
  }),
  on(onResetCounter, () => 0),
);
