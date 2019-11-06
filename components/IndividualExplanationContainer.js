function IndividualExplanationContainer() {
  return (
    <div className="explanationContainer">
      <p className="explanation">System behavior that results from the interplay of components and does not depend on the internals of those components.</p>
      <div className="explanationAttribution">
        <img className="avatar" src="https://diversityavatars.com/assets/images/avatars-gallery/freebie-v3/batman.png" />
         <a className="username" href="https://twitter.com/thedanigrant" target="_blank">
          @albert
        </a>
      </div>
      <style jsx>{`
        .explanationContainer {
          border-radius: 10px;
          background-color: #F6F6F6;
          font-size: 30px;
          font-weight: 600;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          max-width: 500px;
          padding: 20px;
          position: relative;
          height: 300px;
        }
        p {
          margin: 0;
        }
        a {
          margin: 0;
          color: inherit;
          text-decoration: underline;
        }
        .explanationAttribution {
          position: absolute;
          bottom: 10px;
        }
        .avatar {
          border-radius: 50px;
          width: 25px;
          height: 25px;
          display: inline-block;
          position: relative;
          top: 5px;
        }
        .username {
          margin-left: 10px;
          font-size: 15px;
          display: inline-block;
          font-weight: 400;
        }
      `}</style>
    </div>
  )
}

export default IndividualExplanationContainer;
