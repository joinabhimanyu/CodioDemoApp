/** @jsx React.DOM */
var Header = React.createClass({displayName: 'Header',
    render: function() {
        return (
            React.DOM.h1( {className:"h1-header"}, "Hello World")
        );
    }
});

React.renderComponent(
    Header(null ),
    document.getElementById('header')
);

