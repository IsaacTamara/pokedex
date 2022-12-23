import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: localStorage.getItem("nameTreiner") ?? "",
  reducers: {
    setNameTrainerGobal: (state, action) => action.payload
  }
})

export const {setNameTrainerGobal} = nameTrainerSlice.actions

export default nameTrainerSlice.reducer