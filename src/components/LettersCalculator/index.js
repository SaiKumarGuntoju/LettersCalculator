import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeCount = event => {
    this.setState({
      count: event.target.value.length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="page-container">
        <div className="card-container">
          <div className="letters-calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="form-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phraseText"
                onChange={this.onChangeCount}
                placeholder="Enter the phrase"
              />
            </form>
            <p className="count">No.of letters: {count}</p>
          </div>
          <img
            alt="calculator"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
