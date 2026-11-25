import { createReducer, on } from "@ngrx/store";
import { loadLocationSuccess, onLoadLocations } from "./location.action";

export const initialData = {
    locations: [],
    loading: false
}


export const locationReducer =  createReducer(
    initialData,
    on(onLoadLocations,(state)=> ({
        ...state,
        loading: true
    })),
    on(loadLocationSuccess,(state, {locations})=>({
        ...state,
        locations,
        loading: false
    }))

)