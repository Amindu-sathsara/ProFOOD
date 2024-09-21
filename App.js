import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM


//React.createElement=>ReactElement(Js-Object)=> then -> ReactElement(render)
const heading = React.createElement("h1",{id:"heading"},"Namasthe react 💡💡");
const rootElement = document.getElementById("root");
const root =ReactDOM.createRootElement(heading);
root.render(rootElement);


//Jsx transfiled before it reached the js =>Parcel-->Babel
//Jsx =>React transfiles it to React.createElement =>ReactElewment==Wich is js Object and =>HTML element (render)

//JSX is HTML-like or XML-like element not the exact one 
const jsxHeading =<h1>Here I am creatd react heading element using JSX syntax </h1>
console.log(jsxHeading); 

const root2=ReactDOM.createRoot(document.getElementById("root2"));
root2.render(root2);

