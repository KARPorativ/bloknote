import { configureStore } from "@reduxjs/toolkit";
import addNoteSlice from "./addNoteSlice";

const store = configureStore({
  reducer: {
    note: addNoteSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
