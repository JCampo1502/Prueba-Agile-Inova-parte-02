import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./FormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// Define RootState a partir de la configuración del store
export type RootState = ReturnType<typeof store.getState>;

// Exporta el store
export default store;
