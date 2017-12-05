import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';

const TabComponent = (props) => (
    <div className="container">
        <h1>App Header</h1>
        <div className="well">
        {/* Place your content here */}
        {props.children}
        </div>
    </div>
);

const App = () => (
    <TabComponent>
        {/* Passing Elements */}
        <h1>React</h1>
        <img src={logo} alt="react logo"/>
    </TabComponent>
);

render(<App/>,root);