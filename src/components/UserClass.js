import React from "react";

//Here this React.compoent is a bascially a class that provide by react
class UserClass extends React.Component { 

    //To add the props in class based Component we use constructor
    constructor(props) {
        super(props);       //Why we need to must use the super(props)  here? This is the 1 st home Work of this episode?
        console.log(props);

        this.state={
            userInfo: {
                name:"Amindu",
                location:"Matara, Sri Lanka"
            }
        }  //all these state variable in big whole object and use it  
        //console.log(this.props.name+ "call the constructor");
    } 

    async componentDidMount(){
        //console.log(this.props.name+ "call the componentDidMount");
        //API calls goes here
        const data= await fetch("https://api.github.com/users/Amindu-sathsara")
        const jsonData=await data.json();

        this.setState({
            userInfo:jsonData
        });
        console.log(jsonData);

        this.timer=setInterval(() => {
            console.log("I am learn cool stuff to boost my app ");
        }, 1000);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is called  here...");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount is called  here...");
    }

    
    render() {
        const {name,location,avatar_url}=this.state.userInfo;
       
        //console.log(this.props.name+ "call the render");
        return (
            <div className="user-card">
                <img className="github-icon-Amiya" src={avatar_url} alt="github icon" />

                <p>This is the top of the Class Component</p>
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
                <h3>This is a Class Component</h3>
            </div>
        );
    }
}

export default UserClass;


/***
 * Here is all about the getting to know about how the concepts of working environment of class compoent in step by step meanner
 * 1.react call the constructor with (dummy data of components)
 * 2.react will render with just dummy data
 * <Html> loads with just dummy data
 * Then it goes to componentDidMount and 
 *     There happen the API calls 
 *     <this setState > set variable is updated 
 *      
 * render (with API data)
 * <loaded with new HTML come from APIs >
 * Lastly componentUpdateMount happend 
 */

// 