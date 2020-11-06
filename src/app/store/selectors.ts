import { createSelector } from '@ngrx/store';
import { AppState, PeriodicElementsState } from './state';

export const selectPeriodicElements = createSelector(
  (state: AppState) => state.periodicElements,
  (periodicElements: PeriodicElementsState) => periodicElements.elements
);
