import { configureStore } from "@reduxjs/toolkit"
import editorReducer from "./editorslice"

/**
 * Configure the Redux store.
 */
const store = configureStore({
    reducer: {
        editor: editorReducer
    }
})

export default store