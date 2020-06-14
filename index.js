import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Provider } from './Context/context.js';
import Home from './Home.js';


function App() {

  return (
    <Provider>
      <Home />
    </Provider>
  )
}

render(<App />, document.getElementById('root'));
