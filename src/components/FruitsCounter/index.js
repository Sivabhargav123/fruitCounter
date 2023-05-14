// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onClickBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoesCount}</span> mangoes
            <span className="span">{bananasCount}</span> bananas
          </h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit"
            />
          </div>
          <div className="button-container">
            <button
              className="fruit-button"
              onClick={this.onClickMango}
              type="button"
            >
              Eat Mango
            </button>
            <button
              className="fruit-button"
              onClick={this.onClickBanana}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
