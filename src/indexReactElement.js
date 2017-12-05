// Creating DOM element using React
import React from 'react';
import {render} from 'react-dom';

const greeter = <h1>Welcome to React!</h1>; //Declarative way of writing
// const greeter = React.createElement('h1',null,'Welcome to React'); //Imperative way of writing
render(greeter, document.getElementById('root'));
console.dir(greeter);