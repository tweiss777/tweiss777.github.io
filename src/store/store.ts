import { configureStore } from '@reduxjs/toolkit'
import dimensionReducer from '../slices/dimension.slice'


export const store = configureStore({
    reducer: {
        dimensions: dimensionReducer
    },
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
