// Creating Components
/* 1. Variable Pattern
    2. function pattern
    3.ES6 Class Pattern
*/

import React from 'react';
import {render} from 'react-dom';

/* // Variable Pattern
const welcome = <h1>Welcome</h1>;
// render(welcome, document.getElementById('root'));
render(welcome, root); //react will insert document.getElementById('root') */

/* //Function Pattern ES5
// Name should have the first letter in UpperCase
function Welcome(){
    return(<h1>Welcome!</h1>);
} */

/* //Function Pattern ES6 Arrow Function
const Welcome = () => <h1>Hello World</h1>;

render(<Welcome />,root); */

// Class ES6 Pattern
class Welcome extends React.Component{
    // This is Components Render Method
    render(){
        return(<h1>Hey There!!</h1>);
    }
}

// This is React DOM's render method
render(<Welcome />, root);