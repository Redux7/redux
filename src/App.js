import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter
          value={store.getState()}
          onIncrement ={() => store.dispatch({ type: 'INCREMENT'})}
          onDecrement = {() => store.dispatch({ type: 'DECREMENT'})}
        />
      </div>
    );
  }
}

export default App;
