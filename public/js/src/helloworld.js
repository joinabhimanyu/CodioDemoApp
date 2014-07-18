/** @jsx React.DOM */
var Header = React.createClass({
    render: function() {
        return (
            <h1 className="h1-header">Hello World</h1>
        );
    }
});

React.renderComponent(
    <Header />,
    document.getElementById('header')
);

