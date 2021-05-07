import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggin, loggout } from './redux/actions';

import { RootState } from './redux/reducers';

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const logged = useSelector((state: RootState) => state.logged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello, world</h1>
      <div>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
      <div>
        {logged ? <div>
          <h2>You are Logged in</h2>
          <button onClick={() => dispatch(loggout())}>Log out</button>
        </div> : <div>
          <h2>Sign in</h2>
          <button onClick={() => dispatch(loggin())}>Log in</button>
        </div>}
      </div>
    </div>
  );
}

export default App;
