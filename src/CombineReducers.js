import {
    createStore,
    combineReducers
} from 'redux'

const EmployeeReducer = (empList = [], action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return empList.concat(action.employee);
        default:
            return empList;
    }
};

let todoState = {
    id: 0,
    text: 'Learn Redux',
    completed: true
};
const ToggleTodoReducer = (todo = todoState, action) => {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return {
                ...todo,
                completed: !todo.completed,
                text: action.text
            };
            break;

        default:
            return todo;
            break;
    }
}
//coimbine Employee,TODO
const rootReducer = combineReducers({
    ToggleTodoReducer,
    EmployeeReducer
});
//create Store
const store = createStore(rootReducer);

let employee = {
    id: 1,
    name: 'Subramnaian'
};
//Action
const ADD_EMPLOYEE = {
    type: 'ADD_EMPLOYEE',
    employee
};
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(ADD_EMPLOYEE);

employee = {
    id: 2,
    name: 'Ram'

};
store.dispatch({
    type: 'ADD_EMPLOYEE',
    //employee:employee - old version
    employee //  es 6 object de structure
});

/**
 * How to pass action object to reducer?
 * >passing action object dirctly to reducer
 *   store.dispatch({type:'ADD',employee});
 *   store.dispatch(EMPLOYEE_ACTION);
 * 
 * >Action creator?
 *    Just function which returns  Action object 
 * 
 */
/* function ADD_EMPLOYEE_ACTIONCREATOR(employee) {
    return {
        type: 'ADD_EMPLOYEE',
        employee
    }
} */
/* const ADD_EMPLOYEE_ACTIONCREATOR = employee => {
    return {
        type: 'ADD_EMPLOYEE',
        employee
    };
} */
/* const ADD_EMPLOYEE_ACTIONCREATOR = employee => {
    return {
        type: 'ADD_EMPLOYEE',
        employee
    };
}  */
const ADD_EMPLOYEE_ACTIONCREATOR = employee => ({
    type: 'ADD_EMPLOYEE',
    employee
});


store.dispatch(ADD_EMPLOYEE_ACTIONCREATOR({
    id: 1,
    name: 'Geetha'
}));

/////////////////////////////////////////////////////////////////
//TODO Dispatch

const TODO_ACTION_CREATOR = text => ({
    type: 'TOGGLE_TODO',
    text
});
store.dispatch(TODO_ACTION_CREATOR({
    id: 0,
    text: 'Learn React With Redux',
    completed: false
}));