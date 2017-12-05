import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
    // constructor(){
    //     super();
    //     this. state = {
    //         count : 0
    //     };
    // }
    state = {
        count: 0
    }
    // attach onIncrement Counter Method to Button Object during runtime
    onIncrement = this.onIncrement.bind(this);
    // instance Method
    onIncrement() {
        this.setState(
            { count: this.state.count + 1 })
    }
    render() {
        const { count } = this.state;
        return (
            <div className="container">
                {/* <h1>Count : {this.state.count}</h1> */}
               <Count counter={count}/>
                <button onClick={this.onIncrement}>Increment</button>
            </div>
        );
    }
}

// class Count extends React.Component{
//     render(){
//         const {counter} = this.props;
//         return (
//             <h1>Count : {counter}</h1>
//         ); 
//     }
//     componentWillReceiveProps(nextProps) {
//         console.log(nextProps);
//     }
// }

// stateless Component
const Count = ({counter}) => (<h1>{counter}</h1>);

render(<Counter />, root);