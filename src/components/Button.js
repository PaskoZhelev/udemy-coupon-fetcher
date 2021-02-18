import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
      }

      increaseCounter() {
          this.setState({counter: this.state.counter + 1})
      }

    render() {
        return (
            <div>
                <button onClick={() => this.increaseCounter()}>
                 Increase counter
                </button>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}


