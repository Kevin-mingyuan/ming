import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class B extends Component{

    constructor(props){

        super(props);

        this.state = {

            num: 7,

            un: '',
        };
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    foo(){

       
    }

    render(){

        return(

            <div>
            
                <h2>I'm b --- {this.state.num}</h2>

                <Link to='/'>go a</Link>

                <button onClick={this.foo.bind(this)}>incrent</button>
                <Link to='/info'>more info</Link>
            </div>


        )
    }
}

export default B;