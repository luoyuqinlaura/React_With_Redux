//  index.js is the first one to get executed when our project runs in our browser
//  so inside here is where we creat conponent and show on screen

// 1） Import React and ReactSOM libraries, react 是蛋糕胚，reactdom是在web上，reactnative是移动端
import React from 'react'; //library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom'; // library that knows how to get a component to show up in the rowser
import App from './App'; //'./' same directory, '../' up one directory

// 2）Get reference to the div with ID root
const el = document.getElementById('root');

// 3） Tell react to take control of that element
const root = ReactDOM.creatRoot(el);

// 4）Show the component to the screen
root.render(<App />);


