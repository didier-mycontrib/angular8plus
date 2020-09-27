import { createAction } from '@ngrx/store';
// just unique names :
export const increment = createAction('[Counter A_Scope] Increment');
export const decrement = createAction('[Counter A_Scope] Decrement');
export const reset = createAction('[Counter A_Scope] Reset');
