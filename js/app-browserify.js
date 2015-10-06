// es5 and 6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')

var React = require("react")

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }

var TimeTravel = React.createClass({

	getInitialState: function() {
		return {year: 2015,
				flux: false,
			}
	},

	backwardClick: function() {
			console.log("clicked!")
		if(!this.state.flux) {
			this.backward()
		}
	}, 

	forwardClick: function() {
			console.log("clicked!")
		if(!this.state.flux) {
			this.forward()
		}
	}, 

	start: 1000,

	forward: function() {
			this.setState({
				year: this.state.year + 1,
				flux: true
			})
			this.start = this.start * .9
			setTimeout(this.forward, this.start)
	},

	backward: function() {
			this.setState({
				year: this.state.year - 1,
				flux: true
			})
		this.start = this.start * .9
		setTimeout(this.backward, this.start)
	},

	stop: function() {
			this.setState({
				year: this.state.year + 1, 
				flux: this.flux = false
			})
			this.start = this.start / .9
			clearTimeout(this.stop)
	},

	render: function() {
		return(
			<div>
				<p>The year is: <span id="year">{this.state.year}</span></p>
				<button id="back" onClick={this.backwardClick}>Back!</button>
				<button id="stop" onClick={this.stop}>Stop</button>
				<button id="forward" onClick={this.forwardClick}>To the Future!</button>
			</div>
		)
	},

})
React.render(<TimeTravel/>, document.getElementById("readoutContainer"))



