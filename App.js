//



import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM


//Create react element and add it inside the react components 
const reactElem1=(<h1>I am a react Element </h1>)
const age= 21;
//Adding react element into the components                  -(also noted that inside jsx using curly brackets we can write any javascript code )
const HeadingComponent=()=>(
    <div id="container">
        <h1 className="composition" tabIndex="5">heading tag for the components</h1> 
        {"That boy is :"+age}



    </div>)

// Lets create another component  called SuperComponent and  then add reactElem1 and HeadingComponent inside it

const SuperComponent=()=>(
    <div id="container">
        <h1 className="composition" tabIndex="5">heading tag for the  Super components</h1>
        {reactElem1}
        <HeadingComponent/>
    </div>)

//lets create root for above components
const root=ReactDOM.createRoot(document.getElementById("rootForComponent"));
root.render(<SuperComponent/>);



