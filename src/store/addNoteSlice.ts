import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IChangeNote, INote, INotes } from "../interface/note.interface";
import { MdTitle } from "react-icons/md";

const initialState: INotes = {
  notes: [],
  status: "Все",
};

const addNoteSlice = createSlice({
  name: "addNote",
  initialState,
  reducers: {
    AddNewNote(state, action) {
      state.notes.push({ ...action.payload });
    },
    ChangeStatus(state, action) {
      state.status = action.payload;
    },
    DeleteNote(state, action) {
      state.notes = state.notes.filter(
        (item) => item.title != action.payload.title
      );
    },
    ChangeNote(state, action: PayloadAction<IChangeNote>) {
      const index = state.notes.indexOf(action.payload.old);
      state.notes.splice(index, 1, action.payload.new);
    },
  },
});
export const { AddNewNote, ChangeStatus, DeleteNote, ChangeNote } =
  addNoteSlice.actions;
export default addNoteSlice.reducer;
