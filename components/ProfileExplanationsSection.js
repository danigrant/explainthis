import React from 'react'

       // {
       //   this.props.explanations.map((e) => {
       //     return (
       //       <div className="explanation" id={`explanation-${e.id}`}>
       //         <div className="attribution">
       //           <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
       //           <p className="attributionUsername">{e.author}</p>
       //         </div>
       //         <div className="explanationMeat">
       //           {parse(e.explanation)}

class ProfileExplanationsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: '@barackobama'
    }
  }
  render() {
    return (
      <div className="explanationsSection">
        {
          this.props.explanations.map((e) => {

          })
        }
        <div className="explanation">
          <div className="conceptAndDate">
            <p className="concept">Emergence</p>
            <p className="date">Jan 19, 2019</p>
          </div>
          <div className="explanationMeat">
            <p>System behavior that results from the interplay of components and does not depend on the internals of those components.</p>
            <p>Two important corollaries (1) it is possible to study the emergent behavior without understanding the internals and (2) it is impossible to understand the emergent behavior from studying exclusively the internals</p>
          </div>
          <div className="pointCounter">
            <img src="/images/get-it-face.png" />
            <p>+ 12</p>
          </div>
        </div>

        <div className="explanation">
          <div className="conceptAndDate">
            <p className="concept">Emergence</p>
            <p className="date">Jan 19, 2019</p>
          </div>
          <div className="explanationMeat">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/16W7c0mb-rE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Two important corollaries (1) it is possible to study the emergent behavior without understanding the internals and (2) it is impossible to understand the emergent behavior from studying exclusively the internals</p>
          </div>
          <div className="pointCounter">
            <img src="/images/get-it-face.png" />
            <p>+ 12</p>
          </div>
        </div>
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
            padding-bottom: 10px;
          }
          .pointCounter {
            display: inline-block;
            transition:0.3s;
          }
          .pointCounter:nth-of-type(2) {
            margin-left: 35px;
          }
          .pointCounter img {
            display: inline-block;
            width: 24px;
            position: relative;
            top: 5px;
            margin-right: 5px;
          }
          .pointCounter p {
            display: inline-block;
          }
          .concept {
            font-weight: bold;
            margin-bottom: 0;
            font-size: 24px;
          }
          .date {
            margin-top: 0;
            color: #ddd;
          }
          .pointCounter:hover {
            transform: scale(1.1);
            transform-origin: center;
            filter: brightness(115%);
            cursor: pointer;
          }
          .pointCounter:active   {
            transform: rotate(180deg)
          }

        `}</style>
      </div>
    )
  }
}

export default ProfileExplanationsSection
