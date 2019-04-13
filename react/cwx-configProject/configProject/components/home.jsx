import React from 'react';
// import Hello from "../components/hello.jsx"; //引入hello组件

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
                    {/* <Hello text="world" /> */}
            </div>
        )
    }
}
export default Home;