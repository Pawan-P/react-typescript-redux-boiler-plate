import { configureStore } from "@reduxjs/toolkit"
import { reducer as moduleReducer } from "./reducers/Module"

export const store = configureStore({
    reducer: {
        module: moduleReducer
    }
});