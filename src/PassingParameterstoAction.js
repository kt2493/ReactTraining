import {
    createStore
} from 'redux'

const EmployeeReducer = (empList = [], action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return empList.concat(action.employee);
        default:
            return empList;
    }
};
//create Store
const store = createStore(EmployeeReducer);

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
    employee //  es 6 object de structure
    //employee:employee - old version
   
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