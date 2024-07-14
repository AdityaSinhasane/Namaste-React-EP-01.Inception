const heading = React.createElement(  //here this heading is just an object and this object is a React Element.
    "h1",
    {id:"heading", xyz:"abc"},  //This object is used to give attributes to the Tag.
    "Hello World from ReactJS!"
); 

//console.log(heading); //This will return an object to you.

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);


/* How will you create this using ReactJS ?
<div id="parent">
    <div id="child">
        <h1>I'm an h1 Tag</h1>
        <h2>I'm an h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 Tag</h1>
        <h2>I'm an h2 Tag</h2>
    </div>
</div>
*/

const parent = React.createElement(      //here this parent is just an object and this object is a React Element.
    "div",
    {id:"parent"},[
            React.createElement(
            "div",
            {id:"child"},[
            React.createElement("h1",{},"I'm an h1 Tag"),
            React.createElement("h2",{},"I'm an h2 Tag")
        ]),
        React.createElement(
            "div",
            {id:"child2"},[
            React.createElement("h1",{},"I'm an h1 Tag"),
            React.createElement("h2",{},"I'm an h2 Tag")
        ])
    ]
);

console.log(parent); //This will return an object to you.

root.render(parent);
