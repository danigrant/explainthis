import React from 'react'
import parse from 'html-react-parser';
import { addVote } from './Firebase'
import Link from 'next/link'

class ExplanationsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: '@barackobama'
    }
  }
  componentWillMount() {
    console.log(this.props)
  }
  handleVote = (vote, explanationID) => {
    addVote(vote, this.state.loggedInUser, explanationID)
  }
  render() {
    return (
      <div className="explanationsSection">
       {
         this.props.explanations.map((e) => {
           return (
             <div className="explanation" id={`explanation-${e.id}`}>
              {
                this.props.profilepage &&
                <Link href={`/explainthis/${e.concept}`}>
                  <div className="link conceptName">{`${e.author} explains ${e.concept}`}</div>
                </Link>
              }
              {
                !this.props.profilepage &&
                <Link href={`/explainer/${e.author}`}>
                  <div className="attribution link">
                    <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
                    <p className="attributionUsername">{e.author}</p>
                  </div>
                </Link>
              }
               <div className="explanationMeat">
                 {parse(e.explanation)}
               </div>
               <div className="explanationActionBar">
                 <div className="explanationAction" onClick={() => this.handleVote(1, e.id)}>
                   <img src="/images/get-it-face.png" />
                   {e.score > 0 && <p className="score">+ {e.score}</p>}
                 </div>
                 <div className="explanationAction" onClick={() => this.handleVote(-1, e.id)} >
                   <img src="/images/dont-get-it-face.png"/>
                 </div>
               </div>
             </div>
           )
         })
       }
        <style jsx>{`
          .explanation {
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
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
          }
          .explanationActionBar {
            padding-bottom: 20px;
          }
          .explanationAction {
            display: inline-block;
            transition:0.3s;
          }
          .explanationAction:nth-of-type(2) {
            margin-left: 35px;
          }
          .explanationAction img {
            display: inline-block;
            width: 24px;
            position: relative;
            top: 5px;
            margin-right: 5px;
          }
          .explanationAction p {
            display: inline-block;
          }
          explanationAction:hover {
            transform: scale(1.1);
            transform-origin: center;
            filter: brightness(115%);
            cursor: pointer;
          }
          .explanationAction:active:first-child {
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

export default ExplanationsSection
