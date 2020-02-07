import React, { Component } from 'react'



export default class App extends Component {
  state ={
    APR:0,
    budget:0,
  }
  render() {
    return (
      <div>
        helo
        <form>
        <label>APR</label>
        <input type="float"></input>

        </form>
      </div>
    )
  }
}
