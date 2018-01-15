
var React = require('react')
var ReactDOM = require('react-dom')

require("./bargraph.scss");


class BarGraph extends React.Component {


  render() {
    const { donations } = this.props

    return  (
      <div className="barGraph">
      {
        Object.keys(donations).map((amount,i) =>

          <div key={i}>

            <div className="Amount" >{amount}</div>
            {
              donations[amount].map((entry,j) =>
                <div className="entry" key={j}>
                  {entry}
                </div>
              )
            }
          </div>
        )
      }
      </div>
    )
  }
}

module.exports = BarGraph;
