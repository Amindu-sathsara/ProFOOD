import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM

// Creating an element using React.createElement
const heading = React.createElement('h1', { id: "heading1", example: "more thing" }, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById('root'));

// Uncomment this to render heading
// root.render(heading);

console.log(heading);  // This will log the React element to the console

// Creating nested React elements
const parent = React.createElement("div", { id: "child" }, React.createElement("h1", {}, "H1 tag is here now"));
root.render(parent);  // This will render the parent

// Creating sibling HTML tags inside nested React elements
const parent2 = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: 'child1' },
            [
                React.createElement("h1", {}, "H1 tag is here now"),
                React.createElement("h2", {}, "H2 tag is here now")
            ]),
        React.createElement("div", { id: 'child2' },
            [
                React.createElement("h3", {}, "H3  tag is a here now"),
                React.createElement("h4", {}, "H4 tag is a here now")
            ])
    ]
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(parent2);
