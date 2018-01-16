var React = require('react')
var ReactDOM = require('react-dom')
var DonorList = require('./donorlist.jsx')
var Graph = require('./graph.jsx')
var Title = require('./title.jsx')
var parse = require('csv-parse/lib/sync');
require("./home.scss");

import {
  loadDonations,
  loadRegister
} from "./api.jsx";

class Base extends React.Component {

  constructor()
  {
    super()
    this.state = {
      donations: {
        // initial state
        5000: []
      },
      currentAmount: 5000,
      register: {},
      totalRaised: 0,
      goal:500000
    }
    this.load_donations = this.load_donations.bind(this)
    this.load_register  = this.load_register.bind(this)
    this.getTotalRaised = this.getTotalRaised.bind(this)
  }

  getTotalRaised(data)
  {
    var ans = 0;
    for (var key in data)
    {
      ans += key * data[key].length;
    }
    return ans;
  }

  // Loads and parses the donation file
  //  Saves the specific donations, the current level, and 
  //  precomputes the total raised
  load_donations()
  {
    var _this = this
    loadDonations({}, function(data) {
      var currentAmount = _this.state.currentAmount;
      var amount = 0;
      var i = 0;
      var money = {}
      var words = data.match(/\S+/g);
      while (i < words.length) {
        var word = words[i]
        if (word.startsWith("#")) {
          amount = word.substring(1)
          if (word.endsWith("*")) {
            amount = amount.slice(0,-1)
            currentAmount = amount;
          }
          money[amount] = []
        } else {
          money[amount].unshift(word)
        }
        i++
      }
      var total = _this.getTotalRaised(money)
      _this.setState({ donations: money, currentAmount: currentAmount, totalRaised: total })
    })

    // uncomment this to do periodic reloading of donation data.
    // eg, 2 seconds or 5 seconds
    setTimeout(this.load_donations, 5000)
  }

  // Loads the registration mapping from bid number to name
  load_register()
  {
    var _this = this
    loadRegister({}, function(data) {
      var result = {}
      var output = parse(data, {columns: true});
      output.forEach(function(pair) {
        result[parseInt(pair['Number'])] = pair['Name']
      })
      console.log("new registration info", result)
      _this.setState({ register: result })
    })
  }

  componentDidMount()
  {
    this.load_register()
    this.load_donations()
  }

  render() {
      return  (
        <div className="home">
          <Title/>
          <Graph
            totalRaised={this.state.totalRaised}
            goal={this.state.goal}
          />
          <DonorList
            donations={this.state.donations}
            currentAmount={this.state.currentAmount}
            register={this.state.register}
          />
        </div>
      )
  }
}



function render( )
{
    ReactDOM.render(
            <Base />,
            document.getElementById('base')
    );

}

render();
