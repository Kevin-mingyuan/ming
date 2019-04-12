import React from 'react';
import { Link } from 'react-router-dom';

export default class PropsChild extends React.Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render(){
        return (
            <div>
                <p>父元素props</p>
            </div>
        )
    }
}