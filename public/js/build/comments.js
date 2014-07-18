/** @jsx React.DOM */

var CommentList = React.createClass({displayName: 'CommentList',
    render: function() {
        return (
            React.DOM.div( {className:"commentList"}, 
            React.DOM.h3(null,  this.props.value )
            )
        );
    } 
});

var CommentForm = React.createClass({displayName: 'CommentForm',
    render: function() {
        return (
            React.DOM.div( {className:"commentForm"}, 
            React.DOM.h3(null,  this.props.value )
            )
        );
    } 
});

var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      	React.DOM.div( {className:"commentBox"}, 
        React.DOM.h1(null,  this.props.value ),
        CommentList( {value:"This is the comment list"} ),
        CommentForm( {value:"This is the comment form"} )
        )
    );
  }
});


React.renderComponent(
  CommentBox( {value:"Comments"} ),
  document.getElementById('content')
);



