import React, {Component} from 'react';
import {createStore} from 'redux';

import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

class Counter extends Component{
    render(){
        const { value, onIncrement, onDecrement} = this.props;
        return (
            <div className="container">
                <h1>Reduc React App</h1>
                <p className="badge badge-secondary">{value}</p>
                <br/>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        );
    }
}


// Reducer
const CounterReducer = (counter=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return counter + 1;
        case 'DECREMENT':
            return counter - 1;
        default:
            return counter;
    }
}
// store
const store = createStore(CounterReducer);

// Action
const INCREMENT_ACTION = {
    type : 'INCREMENT'
}

const DECREMENT_ACTION = {
    type: 'DECREMENT'
}

function mapStateToProps(counter){
   return{
       value : counter
   }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrement : () => dispatch(INCREMENT_ACTION),
        onDecrement : () => dispatch(DECREMENT_ACTION)

    }
}

const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Rendering
const App = () => (
    <Provider store={store}>
        <CounterApp/>
    </Provider>
);

render(<App/>,root);