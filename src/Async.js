//*Middleware Binding
//applyMiddleware will connect middlewares with Store
///store.dispatch ------Middleware------>reducer
/**
 * Async Actions:
..............
Let's now imagine a simple asynchronous use-case:

1) User clicks on button "Say Hi in 2 seconds"
2) When button "A" is clicked, we'd like to show message "Hi" after 2 seconds have elapsed
3) 2 seconds later, our view is updated with the message "Hi".

 */
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';


const MessageReducer = (message = '', action) => {
    switch (action.type) {
        case 'SAY_HELLO':
            return action.message;
        default:
            return message;
    }
};

//Thunk Middleware : custom code not from redux-thunk lib
const thunkMiddleware = function ({ dispatch, getState }) {
    console.log('Enter thunkMiddleware');
    return function (next) {
        console.log('Function "next" provided:', next);
        return function (action) {
            console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
};

//Teach Store that i have middleware process it.
const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
const rootReducer = combineReducers({ MessageReducer });
const store = finalCreateStore(rootReducer);

//ACTION:
// const MESSAGE_ACTION_CREATOR = message => ({
//     type: 'SAY_HELLO',
//     message
// });
//asyn action : normal actioncreator
/* const ASYN_ACTIONCREATOR = message=> {
    setTimeout(function () {
        return {
            type: 'SAY_HELLO',
            message
        }
    }, 2000)
}; */
const ASYN_ACTIONCREATOR = message => {
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: 'SAY_HELLO',
                message
            })
        }, 5000)
    }
};

store.subscribe(() => {
    console.log(store.getState());
});
//syn
// store.dispatch(MESSAGE_ACTION_CREATOR('Welcome to Redux'));
//asyn
store.dispatch(ASYN_ACTIONCREATOR('Welcome to Redux Asyn'));