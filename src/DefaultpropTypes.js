/* Default Props */

import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class Welcome extends React.Component{
    render(){
        const {name} = this.props;
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}
// Compoent Class has a variable called defaultProps
Welcome.defaultProps = {
    name : 'defaultName'
}
Welcome.propTypes = {
    name : PropTypes.string
}

render(<Welcome name="krithika" />,root);