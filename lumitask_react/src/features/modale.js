import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

export const modaleSlice = createSlice({
    name: 'modale',
    initialState,
    reducers: {
        toggle: (currentState) => {
            currentState.open = !currentState.open
        }
    }
})