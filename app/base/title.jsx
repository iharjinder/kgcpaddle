var React = require('react')
var ReactDOM = require('react-dom')

require("./title.scss");

class Title extends React.Component {
  render() {
    return  (
      <div className="TitleArea">
        <div className="name">
      	   Khalsa Gurmat Center
        </div>
        <div className="title">
          Raise the Paddle
        </div>
      </div>
    )
  }
}

module.exports = Title;
