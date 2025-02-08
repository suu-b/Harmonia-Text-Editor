import { configureStore } from "@reduxjs/toolkit"
import editorReducer from "./editorslice"

const store = configureStore({
    reducer: {
        editor: editorReducer
    }
})

export default store