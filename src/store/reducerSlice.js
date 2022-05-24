import { createSlice } from "@reduxjs/toolkit";

export const dataFun = createSlice({
    name: "scroll",
    initialState: {
        widthAbout: 0

    },
    reducers: {
        setScroll: (state, action) => {

        }
    }
})

export const { setScroll } = dataFun.actions;
export default dataFun.reducer;