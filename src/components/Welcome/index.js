// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    sub: false,
  }

  subscribe = () => {
    this.setState({sub: true})
  }

  subscribed = () => {
    this.setState({sub: false})
  }

  ButtonClicked = () => {
    const {sub} = this.state
    if (sub) {
      return (
        <button className="buttonsty1" onClick={this.subscribed}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="buttonsty2" onClick={this.subscribe}>
        subscribe
      </button>
    )
  }

  render() {
    const {sub} = this.state
    return (
      <div className="bg-container">
        <h1 className="Heading">Welcome</h1>
        <h1 className="para">Thank you! Happy Learning</h1>
        {this.ButtonClicked()}
      </div>
    )
  }
}
export default Welcome
