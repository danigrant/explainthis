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
      </div>
      <style jsx>{`
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
      `}</style>
    </div>
  )
}

export default ExplanationsSection
