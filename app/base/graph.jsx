
var React = require('react')
var ReactDOM = require('react-dom')

require("./graph.scss");

class Graph extends React.Component {
  render() {
    const { totalRaised, goal } = this.props
    return  (
      <div className="Graph">
      	<div className="Bar" style={{width: (totalRaised * 100 / goal) + '%'}}></div>
      	<div className="Amount">${ totalRaised } raised</div>
      </div>
    )
  }
}

module.exports = Graph;
