import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

console.log("webpack rocks")
ReactDOM.render(<App/>, document.getElementById("root")); // function that tells React what to render and where to render it. In this case we're rendering a component called App and it's being rendered at the DOM element with the ID root.