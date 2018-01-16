var React = require('react')
var ReactDOM = require('react-dom')

require("./title.scss");

class Title extends React.Component {
  render() {
    return  (
      <div className="Title">
      	Khalsa Gurmat Center
      </div>
    )
  }
}

module.exports = Title;
