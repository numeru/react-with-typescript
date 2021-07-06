import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slices/counter-slice';
import { change } from './slices/switch-slice';
import { selectCounter, selectSwitch } from './store/store';

const Counter = () => {
  const counterSelector = useSelector(selectCounter);
  const { value, message } = counterSelector;

  const switchSelector = useSelector(selectSwitch);
  const { turn } = switchSelector;

  const dispatch = useDispatch();

  return (
    <div>
      Clicked: <span>{value}</span> times
      <br />
      <span>{message}</span>
      <br />
      <button onClick={() => dispatch(increment('increase'))}>+1</button>
      <button onClick={() => dispatch(decrement('decrease'))}>-1</button>
      <br />
      <br />
      <span>{turn ? 'true' : 'false'}</span>
      <br />
      <button onClick={() => dispatch(change())}>switch</button>
    </div>
  );
};

export default Counter;
