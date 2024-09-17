//Creating a element is core thing for react  and this createElement function is comming from react and first learing src link  in the above cdn file
const heading = React.createElement("h1", {
    id: "heading1",
    example: "more thing"
}, "Hello world from react") //this h1  tag is created here
;
const root = ReactDOM.createRoot(document.getElementById("root"));
//now we can render this created element with root
//root.render(heading)
console.log(heading) // then  this is clearly , heading is a react element
;
//create nested react elements 
const parent = React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "H1  tag is here now"));
root.render(parent) // this parent is a object and basically react elements 
;
//create a sublings of html tags insideone  nested react elements 
const parent2 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "H1  tag is here now"),
        React.createElement("h2", {}, "H2  tag is here now")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h3", {}, "H3  tag is here now"),
        React.createElement("h4", {}, "H4  tag is here now")
    ])
]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent2);

//# sourceMappingURL=index.6bd02f5a.js.map
