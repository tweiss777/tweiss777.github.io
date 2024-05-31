import { createSlice } from "@reduxjs/toolkit";

type Dimension = {
    width: number;
    height: number;
    setWidth(): void;
    setHeight(): void;
};

const initialState: Dimension = {
    width: 0,
    height: 0,
    setWidth() {
        this.width = window.innerWidth;
    },
    setHeight() {
        this.height = window.innerHeight;
    },
};

export const dimensionSlice = createSlice({
    name: "dimension",
    initialState,
    reducers: {
        setWidth: (state) => {
            state.setWidth();
        },
        setHeight: (state) => {
            state.setHeight();
        },
    },
});

export const { setWidth, setHeight } = dimensionSlice.actions;
export default dimensionSlice.reducer;
