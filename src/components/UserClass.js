import React from "react";

//Here this React.compoent is a bascially a class that provide by react
class UserClass extends React.Component { 

    //To add the props in class based Component we use constructor
    constructor(props) {
        super(props);       //Why we need to must use the super(props)  here? This is the 1 st home Work of this episode?
        console.log(props);

        this.state={   //all these state variable in big whole object and use it 
            count:0,
            count2:1,
            count3:10
        }
        console.log(this.props.name+ "call the constructor");


    } 

    componentDidMount(){
        console.log(this.props.name+ "call the componentDidMount");
    }

    

    
    render() {
        const {name,location}=this.props;
        const {count,count2,count3}=this.state;
        console.log(this.props.name+ "call the render");
        return (
            <div className="user-card">
                <p>This is the top of the Class Component</p>
                <h1>Name:{name}</h1>
                <h2>Count:{count}</h2>
                <h2>Count2:{count2}</h2>
                
                <h2>Location:{location}</h2>
                <button onClick={
                    ()=>this.setState(
                        {count:count+1,
                         count2:count2+5,
                        },
                        
                        )}>Increment</button>

                <h3>Count3:{count3}</h3>
                <button onClick={()=>{
                    this.setState({
                        count3:count3+10})
                }
                        }>Increment3</button>
                
                <h3>This is a Class Component</h3>
            </div>
        );
    }
}

export default UserClass;