import React,{ Component } from "react";

class LifecycleB extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"React JS"
        }
        console.log("LifecycleB Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }
    render(){
        console.log("LifecycleB render");
        return(
            <div>
                <h2>LifecycleA</h2>
            </div>
        );
    }
}

export default LifecycleB