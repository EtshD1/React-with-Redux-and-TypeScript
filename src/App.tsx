import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

import { RootState } from './redux/reducers';

function App() {
  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello, world</h1>
      <div>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
    </div>
  );
}

export default App;
