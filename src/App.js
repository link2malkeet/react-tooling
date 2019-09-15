import React from 'react';
import './style.css';

class App extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h1>Hello React Tooling - {this.state.count}</h1>
                <button onClick={() => this.setState({ count: ++this.state.count })}>+</button>
                <button onClick={() => this.setState({ count: --this.state.count })}>-</button>
            </div>
        )
    }
}

export default App;