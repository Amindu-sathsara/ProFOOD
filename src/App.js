//



import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM
import Header from './components/Header';
//import RestaurantCard from './components/RestaurantCard';
import Body from './components/Body';



const AppLayout=()=>{

    return <div className="app">
        <Header/>
        <Body/>
        
    </div>
    
}

//lets create root for above components
const root=ReactDOM.createRoot(document.getElementById("rootForComponent"));
root.render(<AppLayout/>);



