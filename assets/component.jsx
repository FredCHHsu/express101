var React = require('react');

var Hello = React.createClass ({
  render() {
    return (
    	<h1>Hello world</h1>
    );
  }
});

export { Hello };
// module.exports = function () {
//     var element = document.createElement('h1');

//     element.innerHTML = 'Hello the beautiful world';

//     return element;
// };
