import {createStore} from 'redux';

const CounterReducer = (counter = 0, action) => {
    switch(action.type){
        case 'INCREMENT' : 
            return counter + 1;
            break;
        case 'DECREMENT':
            return counter - 1;
            break;
        default:
            return counter;
    }
};

const store = createStore(CounterReducer);
// Action
const INCREMENT_ACTION = {
    type : 'INCREMENT'
}
// listener api to read data from the store
// subscribe will only trigger the request when the state is ready
store.subscribe(() => {
    console.dir(store.getState());
});


// dispatch action
store.dispatch(INCREMENT_ACTION); //Dispatcher calls reducer
store.dispatch(INCREMENT_ACTION);
/* 
// reading Data from store
const state = store.getState(); //state should not be accessed directly
console.dir(state); */