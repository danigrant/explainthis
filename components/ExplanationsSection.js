function ExplanationsSection() {
  return (
    <div className="explanationsSection">
      <div className="explanation">
        <div className="attribution">
          <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
          <p className="attributionUsername">@barackobama</p>
        </div>
        <div className="explanationMeat">
          <p>System behavior that results from the interplay of components and does not depend on the internals of those components.</p>
          <p>Two important corollaries (1) it is possible to study the emergent behavior without understanding the internals and (2) it is impossible to understand the emergent behavior from studying exclusively the internals</p>
        </div>
        <div className="explanationActionBar">
          <div className="explanationAction">
            <img src="/images/get-it-face.png" />
            <p>Yay this helps! I get it.</p>
          </div>
          <div className="explanationAction">
            <img src="/images/dont-get-it-face.png"/>
            <p>Booo, did not help. I do not get it yet.</p>
          </div>
        </div>
      </div>

      <div className="explanation">
        <div className="attribution">
          <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
          <p className="attributionUsername">@barackobama</p>
        </div>
        <div className="explanationMeat">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/16W7c0mb-rE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>Two important corollaries (1) it is possible to study the emergent behavior without understanding the internals and (2) it is impossible to understand the emergent behavior from studying exclusively the internals</p>
        </div>
        <div className="explanationActionBar">
          <div className="explanationAction">
            <img src="/images/get-it-face.png" />
            <p>Yay this helps! I get it.</p>
          </div>
          <div className="explanationAction">
            <img src="/images/dont-get-it-face.png"/>
            <p>Booo, did not help. I do not get it yet.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .explanation {
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
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
          border-bottom: 1px solid #ddd;
        }
        .explanationAction {
          display: inline-block;
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
      `}</style>
    </div>
  )
}

export default ExplanationsSection
