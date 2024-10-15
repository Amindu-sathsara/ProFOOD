
import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
//import RestaurantCard from './components/RestaurantCard';
import Body from './components/Body';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const AppLayout=()=>{

    return <div className="app">
        <Header/>
        <Body/>
        
    </div>
    
}

//let's do the configuration for route
const appRouter=createBrowserRouter([
    {
        "path": "/",
        "element": <AppLayout/>,
        "errorElement": <Error/>
    },
    {
        "path": "/About",
        "element": <About/>
    },
    {
        "path": "/Contact",
        "element": <Contact/>

    }
])

//lets create root for above components
const root=ReactDOM.createRoot(document.getElementById("rootForComponent"));
root.render(<RouterProvider router={appRouter}/>);



