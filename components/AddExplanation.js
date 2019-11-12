import React from 'react'
import Editor from './Editor'

class AddExplanation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: '@barackobama',
      concept: 'emergence'
    }
  }
  render() {
    return (
      <div>
        <div onClick={this.props.handleAnswerClick} className="closeSection"><i className="material-icons">close_rounded</i></div>
        <h1>Hi {this.state.loggedInUser}</h1>
        <p>What do you think is the most fun and delightful way to explain <span className="concept-name">{this.state.concept}</span>?</p>
        <Editor placeholder={`Write something short, sweet and wonderfully wacky that explains ${this.state.concept}.`} />
      <style jsx>{`
        .closeSection {
          position: relative;
          float: right;
          width: 30px;
        }
        h1 {
          margin-bottom: 0;
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
