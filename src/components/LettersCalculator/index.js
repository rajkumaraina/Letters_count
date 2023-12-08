import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  onChange = event => {
    const l = event.target.value.length
    this.setState({letterCount: l})
  }

  render() {
    const {letterCount} = this.state
    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <div className="contentContainer">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="para">
              Enter the phrase
            </label>
            <input
              id="input"
              type="text"
              className="input"
              onChange={this.onChange}
              placeholder="Enter the phrase"
            />
            <p className="Count">No.of letters: {letterCount}</p>
          </div>
          <div className="imgContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters Calculator"
              className="img"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
