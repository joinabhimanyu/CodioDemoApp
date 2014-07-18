/** @jsx React.DOM */
React.renderComponent(
    React.DOM.h1({className:"h1-header"}, 'Hello, world!'),
  document.getElementById('header')
);


var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      	React.DOM.div( {className:"commentBox"}, 
        React.DOM.h1(null, "Comments"),
        CommentList(null ),
        CommentForm(null )
        )
    );
  }
});


React.renderComponent(
  CommentBox(null ),
  document.getElementById('comment-content')
);

var CommentList = React.createClass({displayName: 'CommentList',
    render: function() {
        return (
            React.DOM.div( {className:"commentList"}, 
            "This is a comment list."
            )
        );
    } 
});

var CommentForm = React.createClass({displayName: 'CommentForm',
    render: function() {
        return (
            React.DOM.div( {className:"commentForm"}, 
            "This is a comment form."
            )
        );
    } 
});