/* Creating More Elements
    Javascript and XML
    In React we write declarative code by mixing javascript
    expressions and html markup
    > Javascript expressions play role of data place holders
    > Markup is represented as HTML tags
    HTML Tags are represented by using basic "XML Parsing" Rules:
        1. Every JSX dom tree must have one single parent.
        2. Every opened element must be closed.
            <Welcome></Welcome>
            <Welcome /> -Self Closing Syntax
    HTML Attributes:
    <h1 class="heading"></h1> - HTML Syntax
    <h1 className="heading"></h1> - JSX Syntax
*/

import React from 'react';
import {render} from 'react-dom';
import {Container} from './Container';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render(<Container />,root);