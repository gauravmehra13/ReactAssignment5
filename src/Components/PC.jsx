import React, { PureComponent } from 'react';

class Pure extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        console.warn('render');
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Pure Components:</h1>

                    <div className='App'>
                    <p>Prevents re-rendering of Component if props or state is the same <br/>
                  Takes care of “shouldComponentUpdate” implicitly <br/>
                  State and Props are Shallow Compared <br/>
                  Pure Components are more performant in certain cases
                </p>
<pre>
                <strong>Syntax :</strong> export default class Purecomponents extends PureComponent()
                </pre>
                    </div>

                    <h2> Count : {this.state.count}</h2>


                    <button className='btn' onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increment</button>

                    <button className='btn' onClick={() => { this.setState({ count: this.state.count - 1 }) }} >Decrement</button>
                </header>
            </div>
        );
    }

}

export default Pure;