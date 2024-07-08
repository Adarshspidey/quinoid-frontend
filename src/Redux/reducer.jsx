import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: { note: "" },
  reducers: {
    setNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

export const { setNote } = noteSlice.actions;

export default noteSlice.reducer;
