import React,{ Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("LifecycleA Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }
    incree(){
        this.setState({
            count:this.state.count+1
        })
    }
    decree(){
        this.setState({
            count:this.state.count>0? this.state.count-1:0
        })
    }
    render(){
        console.log("LifecycleA render");
        return(
            <div>
                <h2>LifecycleA</h2>
                <button onClick={()=>this.incree()}>Increment</button>
                <button onClick={()=>this.decree()}>decrement</button>  
                <h1>{this.state.count}</h1>
                <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA