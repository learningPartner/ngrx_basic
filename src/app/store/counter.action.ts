import { createAction } from "@ngrx/store";


export const onIncrementCounter = createAction('[increment]')
export const onDecrementCounter = createAction('Decrement');
export const onResetCounter = createAction("reset")
