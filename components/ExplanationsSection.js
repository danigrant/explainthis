import parse from 'html-react-parser';

function ExplanationsSection(props) {
  return (
    <div className="explanationsSection">
     {
       props.explanations.map((e, index) => {
         return (
           <div className="explanation" id={`explanation-${index}`}>
             <div className="attribution">
               <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
               <p className="attributionUsername">{e.author}</p>
             </div>
             <div className="explanationMeat">
               {parse(e.explanation)}
             </div>
             <div className="explanationActionBar">
               <div className="explanationAction">
                 <img src="/images/get-it-face.png" />
                 <p>Yay this helps! I get it.</p>
                 {e.score > 0 && <p>{e.score}</p>}
               </div>
               <div className="explanationAction">
                 <img src="/images/dont-get-it-face.png"/>
                 <p>Booo, did not help. I do not get it yet.</p>
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
          padding-bottom: 10px;
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
        .explanationAction:hover {
          transform: scale(1.1);
          transform-origin: center;
          filter: brightness(115%);
          cursor: pointer;
        }
        .explanationAction:active:first-child {
          transform: rotate(180deg)
        }

      `}</style>
    </div>
  )
}

export default ExplanationsSection
