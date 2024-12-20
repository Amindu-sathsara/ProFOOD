
import UserClass from "./UserClass";
/*const About=()=>{
    return (
        <div className="aboutHeading">
            <h1>About us </h1>
            <p>I should add an important stuff there...</p>
            <p>Tha all content goes here is just relevant to about page</p>
            <User name={"Amindu Satsara  Function"}/>

            <UserClass name={"Amindu Satsara Class"} location={"Matara,Sri Lanka"}/>
        </div>

    )
}

export default About;

*/

//let's convert this one into class component

 import React from 'react';
 import User from './User';
 import UserContextMock from "../utils/UserContextMock";
 class About extends React.Component {
   render() {
     return (
       <div className="aboutHeading">
         <h1>About us</h1>
         <p>I should add an important stuff there...</p>
         <p>Tha all content goes here is just relevant to about page</p>
         
         <UserClass name={"First-Amindu"} location={"Matara,Sri Lanka"} />
         <UserClass name={"Second-Nimal"} location={"Colombo,Sri Lanka"} />
         <User name="Name come from functionnal component"/>
         <div className="font-bold">
          <UserContextMock.Consumer> 
            {({loggedInUser}) =><h1 className="px-4  font-red">Hello {loggedInUser}</h1>}   
          </UserContextMock.Consumer>
         </div>
       </div>
       
     );
   }
 }

 export default About;