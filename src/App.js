import React from 'react';
import { hot } from 'react-hot-loader';
import './style.css';

class App extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h1 className={this.state.count > 10 ? 'warning' : null}>Hello React Tooling - {this.state.count}</h1>
                <button onClick={() => this.setState({ count: ++this.state.count })}>+</button>
                <button onClick={() => this.setState({ count: --this.state.count })}>-</button>
            </div>
        )
    }
}

export default hot(module)(App);