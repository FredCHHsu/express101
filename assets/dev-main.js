// 'use strict';
// var component = require('./component.jsx');


// document.body.appendChild(component());

import React from 'react';
import Hello from './component.jsx';
// var React = require('react');
// var ReactDOM = require('react-dom');
// require('./component.jsx');

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}