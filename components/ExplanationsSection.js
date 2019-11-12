import React from 'react'
import parse from 'html-react-parser';
import { addVote } from './Firebase'
import Link from 'next/link'
import Loading from '../components/Loading'

class ExplanationsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: '@barackobama'
    }
    this.handleVote = this.handleVote.bind(this)
  }
  async handleVote(vote, explanationID) {
    await addVote(vote, this.state.loggedInUser, explanationID)
    await this.props.parentHandleVote()
    if (vote == -1) {
      this.props.incrementExplanation()
    }
    await this.props.handleUdatingDisplayedScores()
  }
  render() {
    {
      if (!this.props.currentExplanation) {
        return (
          <div>loading...</div>
        )
      } else {
        return (
          <div className="explanationsSection">
             <div className="explanation" key={`explanation-${this.props.currentExplanation.id}`}>
              {
                this.props.profilepage &&
                <Link href={`/explainthis/${this.props.currentExplanation.concept}`}>
                  <div className="link conceptName">{`${this.props.currentExplanation.author} explains ${this.props.currentExplanation.concept}`}</div>
                </Link>
              }
              {
                !this.props.profilepage &&
                <Link href={`/explainer/${this.props.currentExplanation.author}`}>
                  <div className="attribution link">
                    <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
                    <p className="attributionUsername">{this.props.currentExplanation.author}</p>
                  </div>
                </Link>
              }
               <div className="explanationMeat">
                 {parse(this.props.currentExplanation.explanation)}
               </div>
               <div className="explanationActionBar">
                 <div className="get-it-button explanationActionButton" onClick={() => this.handleVote(1, this.props.currentExplanation.id)}>
                   <img src="/images/get-it-cat.png" />
                   <p>AHA! WOW! YIPPEE! I get it now.</p>
                 </div>
                 <div className="dont-get-it-button explanationActionButton" onClick={() => this.handleVote(-1, this.props.currentExplanation.id)} >
                   <p>Nah, explain it to me a different way.</p>
                   <img src="/images/dont-get-it-cat.png" />
                 </div>
               </div>
             </div>
            <style jsx>{`
              .explanationsSection {
                position: relative;
                height: 560px;
              }
              .explanation {
                border-bottom: 1px solid #ddd;
                margin-bottom: 20px;
                height: 100%;
                display: flex;
                flex: 1;
                flex-direction: column;
              }
              .explanation:last-child {
                border: none;
              }
              .attributionAvatar {
                width: 30px;
                border-radius: 50px;
                display: inline-block;
                position: relative;
                top: 5px;
              }
              .attributionUsername {
                display: inline-block;
                margin-left: 10px;
              }
              .explanationMeat {
                padding-bottom: 5px;
                font-size: 30px;
                flex-grow: 1;
              }
              .explanationActionBar {
                align-self: center;
                font-size: 20px;
                text-align: center;
                color: white;
              }
              .explanationActionButton {
                display: inline-block;
                transition:0.3s;
              }
              .explanationActionButton:nth-of-type(2) {
                margin-left: 35px;
              }
              .explanationActionButton img {
                display: inline-block;
                width: 45px;
                position: relative;
                top: 15px;
                z-index: 1;
              }
              .explanationActionButton p {
                display: inline-block;
                padding: 10px 30px 10px 30px;
                border-radius: 20px;
                margin: 0;
              }
              .get-it-button p {
                background-color: #A3D066;
              }
              .get-it-button img {
                position: relative;
                left: 26px;
              }
              .dont-get-it-button p {
                background-color: #6EC3E9;
              }
              .dont-get-it-button img {
                position: relative;
                right: 26px;
              }
              .explanationActionButton:hover {
                transform: scale(1.1);
                transform-origin: center;
                filter: brightness(115%);
                cursor: pointer;
              }
              .explanationActionButton:active:first-child {
                transform: rotate(180deg)
              }
              .score {
                margin-right: 10px;
                color: #bbb;
              }
              .conceptName {
                font-weight: bold;
                font-size: 24px;
              }
              .link {
                cursor:pointer;
              }
              .link:hover {
                filter: brightness(115%);
              }
              .link:active {
                filter: brightness(125%);
              }
            `}</style>
          </div>
        )
      }
    }
  }
}

export default ExplanationsSection
