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
    setLoading: (state: ExpoState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setContainerData: (state: ExpoState, action: PayloadAction<ExpoListImage>) => {
      state.loading = false;
      state.containerData = action.payload;
    },
  },
});

export const { setContainerData } = expoSlice.actions;
export const { setLoading } = expoSlice.actions;

export const selectContainerData = (state: RootState) => state.expo.containerData;
export const selectLoading = (state: RootState) => state.expo.loading;

export default expoSlice.reducer;
