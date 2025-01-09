import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IForm from "../Interfaces/IForm";
import IFormState from "../Interfaces/IFormState";

//Estado inicial
const initialState: IFormState = {
  forms: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<IForm>) => {
      state.forms.push(action.payload);
    },
    resetForm: (state) => {
      state.forms = [];
    },
  },
});

export const { addForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
