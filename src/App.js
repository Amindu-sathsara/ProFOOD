
import React, { lazy, Suspense } from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
//import Mart from './components/Mart';
import Error from './components/Error';
//import RestaurantCard from './components/RestaurantCard';
import Body from './components/Body';

import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
const Mart=lazy(()=>import("./components/Mart"));
const AppLayout=()=>{
    

    return <div className="app">
        <Header/>
        <Outlet/>
        
    </div>
    
}

//let's do the configuration for route
const appRouter=createBrowserRouter([
    {
        "path": "/",
        "element": <AppLayout/>,
        "children": [
            {
                "path": "/",
                "element": <Body/>
            },
            {
                "path": "/About",
                "element": <About/>
            },
            {
                "path": "/Contact",
                "element": <Contact/>
            },
            {
                "path": "/Cart",
                "element":<Cart/>
            },
            {
                "path":"/Mart",
                "element":<Suspense fallback={<h1>Loading...</h1>}><Mart/></Suspense>
            },
            {
                "path": "/Restaurant/:resId",
                "element": <RestaurantMenu/>
            },
            

        ],
        "errorElement": <Error/>
    },
    
])

//lets create root for above components
const root=ReactDOM.createRoot(document.getElementById("rootForComponent"));
root.render(<RouterProvider router={appRouter}/>);



