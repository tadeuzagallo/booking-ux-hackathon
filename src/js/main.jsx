/** @jsx React.DOM */

var hello = React.createClass({
  render: function () {
    return <h1>Hello!</h1>;
  }
});

React.renderComponent(<hello/>,
                      document.querySelector('.rooms-table'));
