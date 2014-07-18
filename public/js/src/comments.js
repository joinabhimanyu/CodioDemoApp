/** @jsx React.DOM */

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
            <h3>{ this.props.value }</h3>
            </div>
        );
    } 
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
            <h3>{ this.props.value }</h3>
            </div>
        );
    } 
});

var CommentBox = React.createClass({
  render: function() {
    return (
      	<div className="commentBox">
        <h1>{ this.props.value }</h1>
        <CommentList value="This is the comment list" />
        <CommentForm value="This is the comment form" />
        </div>
    );
  }
});


React.renderComponent(
  <CommentBox value="Comments" />,
  document.getElementById('content')
);



