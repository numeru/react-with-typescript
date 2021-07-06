import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counter-slice';
import switchSlice from '../slices/switch-slice';

// store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    switch: switchSlice.reducer,
  },
});

// selector
export type RootState = ReturnType<typeof store.getState>;

export const selectCounter = (state: RootState) => state.counter;
export const selectSwitch = (state: RootState) => state.switch;
