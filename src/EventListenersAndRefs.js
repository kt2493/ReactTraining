import React from 'react';
import {  render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// State and DOM Manipulation
class InputComponent extends React.Component{
    state = {
        name : 'Pete Hunt'
    };
    onUpdate = this.onUpdate.bind(this);
    onUpdate(e){
        // let nodeRef = e.target;
        // this.setState({name: nodeRef.value});
        this.setState({
            name : e.target.value
        })
    }
    // override componentDidMount
    componentDidMount(){
        // This function is called once the DOM is ready
        // Accessing the ref variable
        // As a convention refs are NOT RECOMMENDED
        const headerNode = this.refs.header;
        // addEventListener
        // these events are not controlled by React. 
        // These are provided by React Out-Of-Box.. This is pure Javascript Code
        let color = this.refs.header.getAttribute('mycolor');
        headerNode.addEventListener('mouseover', function(e) {
            console.log(e.type);
            this.style.backgroundColor = color||'red';
        });
        headerNode.addEventListener('mouseleave', function (e) {
            console.log(e.type);
            this.style.backgroundColor = 'green';
        });
    }
    render(){
        const {name} = this.state; 
        return(
            <div className="container">
                {/* Ref Pattern */}
                <h1 mycolor="" ref="header" className="well">{name}</h1>
                {/* Accessing placeholder value through synthetic events */}
                <input placeholder="Name.." onChange={this.onUpdate}/>
            </div>
        );
    }
}

render(<InputComponent/>,root);