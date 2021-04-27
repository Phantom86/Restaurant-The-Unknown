import React from 'react'; //import react for this file is important
import ReactDOM from 'react-dom'; //react dom should be imported for this.React dom provides specific method that can be used at top level of the app/web.
import './index.css'; //import css files
import App from './App'; //import css files
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; //import the bootstrap used which is from react itself


ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//This is done by Dharshan Harikrishnan