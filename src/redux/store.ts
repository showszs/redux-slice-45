import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSilce";
const store = configureStore({
    reducer: {counter: counterReducer}
})

export default store