import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render () {
   const { value, onIncrement, onDecrement } = this.props
   console.log(this.props)
    return (
      <div>
        <p>Clicked {value} times</p>
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
      </div>
    )
  }
}

export default Counter;