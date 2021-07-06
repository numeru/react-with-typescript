import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  turn: boolean;
};

const initialState: InitialState = {
  turn: false,
};

const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    change(state) {
      state.turn = !state.turn;
    },
  },
});

export default switchSlice;

// actions
export const { change } = switchSlice.actions;
