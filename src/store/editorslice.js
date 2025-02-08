import { createSlice } from "@reduxjs/toolkit"

const initialState = { text: "" }

const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { setText } = editorSlice.actions
export default editorSlice.reducer