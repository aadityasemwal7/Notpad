import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
    currentText: "",
}

export const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter((note, index) => index !== action.payload)
        },
        editNote: (state, action) => {
            const {index, newText} = action.payload
            state.notes[index] = newText
        },
    },
})

export const {addNote, deleteNote, editNote} = noteSlice.actions 
export default noteSlice.reducer