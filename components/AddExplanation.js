import React from 'react'
import Editor from './Editor'
import { Fireworks } from 'fireworks/lib/react'

class AddExplanation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: '@barackobama',
      concept: 'emergence'
    }
  }
  render() {
    let fxProps = {
      count: 3,
      interval: 1800000000000,
      colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#ff5722', '#ffc107', '#ffeb3b'],
      calc: (props, i) => ({
        ...props,
        x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
        y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
      })
    }
    return (
      <div>
        {
          this.props.celebration &&
          <Fireworks {...fxProps} />
        }
        <div onClick={this.props.handleAnswerClick} className="closeSection"><i className="material-icons">close_rounded</i></div>
        {
          this.props.celebration &&
          <h1>Aha! Yay! Go {this.state.loggedInUser}!</h1>
        }
        {
          this.props.celebration &&
          <p>Now that you get it, add your own explanation to the mix! You’ll learn it extra well, and you’ll be paying it forward and helping future people who think just like you. How would you explain <span class="concept-name">{this.state.concept}</span> to someone who thinks just like you?</p>
        }
        {
          !this.props.celebration &&
          <h1>Hi {this.state.loggedInUser}</h1>
        }
        {
          !this.props.celebration &&
          <p>What do you think is the most fun and delightful way to explain <span className="concept-name">{this.state.concept}</span>?</p>
        }
        <Editor handleAnswerClick={this.props.handleAnswerClick} placeholder={`Write something short, sweet and wonderfully wacky that explains ${this.state.concept}.`} />
      <style jsx>{`
        .closeSection {
          position: relative;
          float: right;
          width: 30px;
        }
        h1 {
          margin-bottom: 0;
          font-weight: 900;
        }
        p {
          margin-top: 10px;
          margin-bottom: 5px;
          color: #a9a9a9;
        }
      `}</style>
      </div>
    )
  }
}

export default AddExplanation
