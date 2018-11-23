import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render () {
   const { value } = this.props
    return (
      <div>
        <p>{value}</p>
        <p>Yooooooo</p>
      </div>
    )
  }
}

export default Counter;