import React from 'react';
import { Link } from 'react-router-dom';

class InfoChild extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <strong> i am infoChild haha</strong>
                <Link to="/">go to home </Link>
            </div>
        )
    }
}
export default InfoChild;