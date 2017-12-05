// Creating DOM element using Javascript

window.onload=component;

function component(){
    console.log('DOM is ready');
    // create element node
    var greeter = document.createElement('h1');
    console.dir(greeter);
    // create text node
    var message = document.createTextNode('Welcome to React!');
    console.log(message);
    // link both
    greeter.appendChild(message);
    // Insert the node into the root Html Node
    var container = document.getElementById('root');
    container.appendChild(greeter);
    console.log(container);
}