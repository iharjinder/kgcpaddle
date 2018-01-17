var React = require('react')
var ReactDOM = require('react-dom')

var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm
require("./donorlist.scss");

class DonorList extends React.Component {
  render() {
    const { donations, currentAmount, register } = this.props

    const tableRows = donations[currentAmount].map((entry,j) =>
    (  <tr className="entry" key={entry}>
        <td className="bid">{entry}</td>
        <td>{register[entry]}</td>
       </tr>
    ));

    return  (
      <div className="donorList">
        <div className="Amount">${currentAmount}</div>
        <table>
        {
         <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={3000}
            transitionLeaveTimeout={300}
            transitionAppearTimeout={3000}
            transitionAppear={true}
            component="tbody">
            {tableRows}
          </CSSTransitionGroup>
        }
        </table>
      </div>
    )
  }
}

module.exports = DonorList;
