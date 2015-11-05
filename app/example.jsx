var ExampleApplication = React.createClass({
    getInitialState: function(){
        return { duration: this.props.elapsed, show: true}
    },
    componentWillReceiveProps: function(newProps) {
        this.setState({ duration: newProps.elapsed });
    },
    handleKeyUp: function(e){
        console.log(e);
        var show_toggle = !this.state.show;
        this.setState({show:show_toggle});
    },
    render: function() {
        var elapsed = Math.round( this.state.duration  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
        'React has been successfully running for ' + seconds + ' seconds.';
        message = this.state.show ? message : "Show Something Wrong!!!!";
        return <p onClick={this.handleKeyUp}>{message}</p>;
    }
});

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
var ExampleApplicationFactory = React.createFactory(ExampleApplication);
var start = new Date().getTime();
setInterval(function() {
    ReactDOM.render(
      ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
      document.getElementById('example')
      );
}, 50);