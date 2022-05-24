import { configureStore } from "@reduxjs/toolkit";
import dataFun from "./reducerSlice";
export const store = configureStore({
    reducer: {
        data: dataFun
    }
})