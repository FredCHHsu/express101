'use strict';

import React from 'react';
import Hello from './component';
// import ExampleApplication from './component';

main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}