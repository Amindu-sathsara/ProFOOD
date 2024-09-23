//



import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM


//Create Component called Title
const Title = ()=>(<h1 className="title">Title of the components</h1>);


//creating another component called HeadingComponent and add above  =Smart people like interviewer mentioned that as composition 

const HeadingComponent=()=>(
    <div id="container">
        <Title/> 
        <h1 className="composition" tabIndex="5">heading tag for the components</h1> 


    </div>)

//lets create root for above components
const root=ReactDOM.createRoot(document.getElementById("rootForComponent"));
root.render(<HeadingComponent/>);

