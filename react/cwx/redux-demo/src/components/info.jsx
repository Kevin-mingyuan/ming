import React ,{ Component } from 'react';
import {Link} from 'react-router-dom';


class Info extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                this is Info<br/>
                <Link to="/">go to home</Link>
            </div>
        )
    }
}

export default Info;