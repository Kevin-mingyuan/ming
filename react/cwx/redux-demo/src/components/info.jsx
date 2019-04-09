import React from 'react'
import {Link} from 'react-router-dom';

import InfoChild from './infoChild.jsx'; //引入组件首字母必须大写

class Info extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[1,2,3,4,5,6],
            title:"haha",
            num:0
        }
    }
    handleSetTitle(){
        console.log(this.state.arr)
        this.setState({title:"info"})
    }
    handleAdd(){       //前一个数值,当前最新数值
        this.setState((preState, props) => ({
            num: preState.num + 1
        }))
        this.setState((preState, props) => {
            console.log(preState , props)
        })
    }
    render(){
        return(
            <div>
                this is Info<br/>
                <Link to="/">go to home</Link>
                <button onClick={ this.handleSetTitle.bind(this) }>state</button>
                <button onClick={ this.handleAdd.bind(this) }>add....</button>
                <hr />
                <InfoChild />
            </div>
        )
    }
}

export default Info;