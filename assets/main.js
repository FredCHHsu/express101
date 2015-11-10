// 'use strict';

// ES6
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

// Common JS
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Hello = require('./component.jsx');

main();

function main() {
    ReactDOM.render(<Hello name={"React Scucess Yeah"}/>, document.getElementById('app'));
}