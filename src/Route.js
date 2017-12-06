import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

///create components
const Home = () => <h1>Home</h1>;
const Employee = () => <h1>Employee</h1>;
const Contact = () => <h1>ContactUs</h1>;


/* match is a react-router-dom object that provides the url details to the component */
const Topic = ({ match }) => (<div>
    {/** 
     const url = `http://example.com/api/topics/${match.params.topicId} `

      fetch(url).then(res=>res.json()).then(topic=>this.setState({
       topic:topic
      }))
   **/}
    <h1>{match.params.topicId}</h1>
</div>)



//Topics Component having submenu
const Topics = ({ match }) => (<div>
    <h1>Topics</h1>
    <ul>
        <li>

            <Link to={`${match.url}/react`}>
                Rendering with React
      </Link>
        </li>
        <li>
            <Link to={`${match.url}/angular`}>
                Rendering with Angular
      </Link>
        </li>
        <li>
            <Link to={`${match.url}/es6`}>
                Working with es6
      </Link>
        </li>

    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} ></Route>
</div>);



//Navigation
const App = () => (
    <div>
        <BrowserRouter>
            {/**Nav Bar **/}
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactus">contactus</Link></li>
                    <li><Link to="/employee">Employee</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <hr />
                {/**Route Matching **/}
                <Route exact path="/" component={Home} />
                <Route path="/contactus" component={Contact} />
                <Route path="/employee" component={Employee} />
                <Route path="/topics" component={Topics} />

            </div>
        </BrowserRouter>
    </div>
);
render(<App />, root);