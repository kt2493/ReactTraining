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
    applyMiddlware
} from 'redux';


const MessageReducer = (message = '', action) => {
    switch (action.type) {
        case 'SAY_HELLO':
            return action.message;
            break;
        default:
            return message;
    }
};

const store = createStore(MessageReducer);

//ACTION:
const MESSAGE_ACTION_CREATOR = message => ({
    type: 'SAY_HELLO',
    message
});
store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(MESSAGE_ACTION_CREATOR('Welcome to Redux'));