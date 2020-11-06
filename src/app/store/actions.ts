import { createAction, props } from '@ngrx/store';

export const toggleActiveStatus = createAction(
  '[Periodic Elements] Toggle Active Status',
  props<{ id: number }>()
);

