import { createSlice } from "@reduxjs/toolkit";

type Dimension = {
    width: number;
    height: number;
};

const initialState: Dimension = {
    width: 0,
    height: 0,

};

export const dimensionSlice = createSlice({
    name: "dimension",
    initialState,
    reducers: {
        setWidth: (state) => {
            state.width = window.innerWidth
        },
        setHeight: (state) => {
            state.height = window.innerHeight
        },
    },
});

export const { setWidth, setHeight } = dimensionSlice.actions;
export default dimensionSlice.reducer;
