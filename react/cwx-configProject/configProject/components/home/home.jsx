import React from 'react';
import HomeChild from "./homeChild.jsx"; //引入hello组件

 class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="index_container">
                    hello home

                <HomeChild  />

            </div>
        )
    }
}
export default Home;