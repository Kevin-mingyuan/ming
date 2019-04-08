import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class C extends Component{

    render(){

        return(

            <div>
            
                <h2>I'm c</h2>

                <Link to='/'>go a</Link>
            </div>
        )
    }
}

export default C;