
//Creating a element is core thing for react  and this createElement function is comming from react and first learing src link  in the above cdn file

const heading=React.createElement('h1',{id:"heading1",example:"more thing"},"Hello world from react")  //this h1  tag is created here
const root=ReactDOM.createRoot(document.getElementById('root'));

//now we can render this created element with root
//root.render(heading)

console.log(heading)    // then  this is clearly , heading is a react element

//create nested react elements 
const parent =React.createElement("div",{id:"child"},React.createElement("h1",{},"H1  tag is here now"));
root.render(parent)




