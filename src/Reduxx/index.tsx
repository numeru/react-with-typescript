import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getCountStart, increment } from './slices/counter-slice';
import { change } from './slices/switch-slice';
import { selectCounter, selectSwitch } from './store/store';

const Counter = () => {
  const counterSelector = useSelector(selectCounter);
  const { value, message, loading } = counterSelector;

  const switchSelector = useSelector(selectSwitch);
  const { turn } = switchSelector;

  const dispatch = useDispatch();

  return (
    <div>
      <span>{value}</span>
      <br />
      <span>{message}</span>
      <br />
      <button onClick={() => dispatch(increment('increase'))}>+1</button>
      <button onClick={() => dispatch(decrement('decrease'))}>-1</button>
      <button onClick={() => dispatch(getCountStart(value))}>
        get count 100
      </button>
      <br />
      {loading && <div>Loading...</div>}
      <br />
      <br />
      <span>{turn ? 'true' : 'false'}</span>
      <br />
      <button onClick={() => dispatch(change())}>switch</button>
    </div>
  );
};

export default Counter;
