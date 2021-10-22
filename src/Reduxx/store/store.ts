import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counter-slice';
import switchSlice from '../slices/switch-slice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'Reduxx/sagas/root-saga';

// store

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      switch: switchSlice.reducer,
    },
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export default store;

// selector
type RootState = ReturnType<typeof store.getState>;

export const selectCounter = (state: RootState) => state.counter;
export const selectSwitch = (state: RootState) => state.switch;
