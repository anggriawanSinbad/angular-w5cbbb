import { createReducer, on, Action } from '@ngrx/store';
import { toggleActiveStatus } from './actions';
import { initialState, PeriodicElementsState } from './state';

const periodicElementsReducer = createReducer(
  initialState,
  on(toggleActiveStatus, (state, {id}) => {
    const index = state.elements.map(el => el.id).indexOf(id);
    const elements = JSON.parse(JSON.stringify(state.elements));
    elements[index].activate = !elements[index].activate;

    return {
      elements
    };
  })
);

export function reducer(state: PeriodicElementsState | undefined, action: Action) {
  return periodicElementsReducer(state, action);
}
