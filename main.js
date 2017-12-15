import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classes from './main.css';
console.log(112, classes.main);

let main = () => {
  ReactDOM.render(
    <h1 className={classes.main}>Hello, world!</h1>,
    document.getElementById('root')
  );
};

export default main;
