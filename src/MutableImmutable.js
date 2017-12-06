let list = [1, 2, 3];
Object.freeze(list);
//list.push(4);
//let newList = list.concat([4]);
let newList = [...list, 4]; // es 7 spread operator
console.log(list);
console.log(newList);
//// literal object:

/* const toggleTodo = todo => {
    // Mutated version:
    todo.completed = !todo.completed; // changing
    todo.text = 'Learn React Redux'
    return todo;
}; */

/* const toggleTodo = todo => {
    // ImMutated version:
    return Object.assign({}, todo, {
        completed : !todo.completed, // changing
        text :'Learn React Redux'
    });
} */
const toggleTodo = (todo) => {
    return {
        ...todo,
        completed: !todo.completed,
        text: 'Learn react with Redux'
    };
};

let data = {
    id: 0,
    text: 'Learn Redux',
    completed: true
};
Object.freeze(data);
console.log(toggleTodo(data));