import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ExpoListImage } from './expo-list-image';

interface ExpoState {
  loading: boolean;
  containerData: ExpoListImage;
}

const initialState: ExpoState = {
  loading: true,
  containerData: {
    nWidth: null,
    nHeight: null,
    width: null,
    height: null,
    left: null,
  },
};

export const expoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setContainerData: (state: ExpoState, action: PayloadAction<ExpoListImage>) => {
      state.containerData = action.payload;
    },
  },
});

export const { setContainerData } = expoSlice.actions;

export const selectContainerData = (state: RootState) => state.expo.containerData;

export default expoSlice.reducer;
