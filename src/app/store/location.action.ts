import { createAction, props } from "@ngrx/store";


export const onLoadLocations = createAction('[Load Locations]')


// export const loadLocationSuccess = createAction(
//   '[Load Locations] Success',
//   props<{ locations: any[] }>()
// );

export const  loadLocationSuccess =  createAction('[loadSucces]', props<{locations:any}>())

 