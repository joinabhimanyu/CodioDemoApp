/** @jsx React.DOM */

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


// React.renderComponent(
//   <CommentBox />,
//   document.getElementById('content')
// );



