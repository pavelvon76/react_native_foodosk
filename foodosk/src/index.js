import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

var myElement = React.createElement('h1', {className:'greeting'}, 'Ahoj světe, div se!');
// ReactDOM.render(myElement,document.getElementById('root'));

reactDom.render(<App/>,
    document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
