import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "..";

type Model = {
  id: string;
  name: string;
  src: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number | [number, number, number];
  isVisible: boolean;
  isRendered: boolean;
};

interface ModelsState {
  models: Model[];
}

const initialState: ModelsState = { models: [] };

const modelsSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    addModel: (state, action: PayloadAction<Model>) => {
      state.models.push(action.payload);
    },
    /** Remove by model id */
    removeModel: (state, action: PayloadAction<string>) => {
      state.models = state.models.filter(
        (model) => model.id !== action.payload
      );
    },
  },
});

export const removeModelWithCleanup =
  (id: string, src: string) => (dispatch: AppDispatch) => {
    URL.revokeObjectURL(src); // efekt uboczny
    dispatch(removeModel(id)); // czysta akcja redukująca
  };

export const { addModel, removeModel } = modelsSlice.actions;
export default modelsSlice.reducer;
