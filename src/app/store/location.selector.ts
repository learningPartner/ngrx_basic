import { createFeatureSelector, createSelector } from "@ngrx/store";




export const selectLocations =   createFeatureSelector<any>('locations');

export const selectLocationArray =  createSelector(
    selectLocations,
    (state) => state.locations
)

export const selectLoading = createSelector(
    selectLocations,
    (state) => state.loading
)