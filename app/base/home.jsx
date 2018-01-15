
var React = require('react')
var ReactDOM = require('react-dom')
var BarGraph = require('./bargraph.jsx')
var Queue = require('./queue.jsx')

require("./home.scss");


import {
  loadDonations,
  loadRegister
} from "./api.jsx";


var Donations = {

  5000: [ 234, 554, 223  ],
  500: [ 12   ]

}

class Base extends React.Component {

  constructor()
  {
    super()
    this.state = {
      donations: [],
      register: []
    }
    this.load_donations = this.load_donations.bind(this)
    this.load_register  = this.load_register.bind(this)
    this.convert = this.convert.bind(this)
  }

  convert(data)
  {
    // change this to parse text donation data and convert it to the appropriate json file
    return Donations
  }

  load_donations()
  {
    var _this = this
    console.log("reload");
    loadDonations({}, function(data) {
      console.log("get data file", data);
      var newDonations = _this.convert(data)
      _this.setState({ donations: newDonations })
    })

    // uncomment this to do periodic reloading of donation data.
    // eg, 2 seconds or 5 seconds
    // setTimeout(this.reload, 10000)
  }

  load_register()
  {

  }

  componentDidMount()
  {
    this.load_donations()
    this.load_register()
  }

  render() {
      return  (
        <div className="home">
          <Queue
            register={this.state.register}
          />

          <BarGraph
            donations={this.state.donations}
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
