import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: number;
  message: string;
  loading: boolean;
};

const initialState: InitialState = {
  value: 0,
  message: '',
  loading: false,
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
    getCountStart(state) {
      state.loading = true;
      state.message = '';
    },
    getCountDone(state, action: PayloadAction<number>) {
      state.value = action.payload;
      state.loading = false;
    },
  },
});

export default counterSlice;

// actions
export const { increment, decrement, getCountStart, getCountDone } =
  counterSlice.actions;
