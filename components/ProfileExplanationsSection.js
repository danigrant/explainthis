import React from 'react'
import parse from 'html-react-parser';
import { addVote } from './Firebase'
import Link from 'next/link'
import Loading from '../components/Loading'

class ProfileExplanationsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: '@barackobama'
    }
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
              <Link href={`/explainthis/${this.props.currentExplanation.concept}`}>
                <div className="link title">{this.props.currentExplanation.author} explains <span className="concept-name">{this.props.currentExplanation.concept}</span></div>
              </Link>
               <div className="explanationMeat">
                 {parse(this.props.currentExplanation.explanation)}
               </div>
               <div className="explanationActionBar">
                 <div className="explanationActionButton" onClick={this.props.incrementExplanation} >
                   <p>Next One</p>
                   <img src="/images/just-because.png" />
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
                position: relative;
                bottom: 50px;
              }
              .explanationActionButton:nth-of-type(2) {
                margin-left: 35px;
              }
              .explanationActionButton img {
                display: inline-block;
                width: 45px;
                position: relative;
                top: 15px;
                position: relative;
                right: 26px;
                z-index: 1;
              }
              .explanationActionButton p {
                display: inline-block;
                padding: 10px 30px 10px 30px;
                border-radius: 20px;
                margin: 0;
                background-color: #A3D066;
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
              .score {
                margin-right: 10px;
                color: #bbb;
              }
              .concept-name {
                font-weight: bold;
                color: #6462EF;
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
              .title {
                font-size: 24px;
              }
            `}</style>
          </div>
        )
      }
    }
  }
}

export default ProfileExplanationsSection
