import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: number;
  message: string;
};

const initialState: InitialState = {
  value: 0,
  message: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<string>) {
      state.value += 1;
      state.message = action.payload;
    },
    decrement(state, action: PayloadAction<string>) {
      state.value -= 1;
      state.message = action.payload;
    },
  },
});

export default counterSlice;

// actions
export const { increment, decrement } = counterSlice.actions;
