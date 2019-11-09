function Editor() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="attribution">
          <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
          <p className="attributionUsername">@barackobama</p>
        </div>
      </div>
      <div className="toolBar">
        <div className="toolBarItem">
          <i className="material-icons">link_rounded</i>
        </div>
        <div className="toolBarItem">
          <i className="material-icons">insert_photo_rounded</i>
        </div>
        <div className="toolBarItem">
          <img src="/images/twitter.svg" />
        </div>
        <div className="toolBarItem">
          <img src="/images/youtube.svg" />
        </div>
        <div className="toolBarItem">
          <i className="material-icons">camera_front_rounded</i>
        </div>
      </div>
      <div className="editor">
        <form>
          <textarea name="write-explanation-field" placeholder="How would you explain emergence?" rows="5"></textarea>
        </form>
      </div>
      <style jsx>{`
        .wrapper {
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 550px;
          margin: 0 auto;
        }
        .header {
          background: #fafafa;
          padding: 3px 8px;
          min-height: 39px;
          border-radius: 5px 5px 0 0;
          border-bottom: 1px solid #ddd;
        }
        .attribution {
          position: relative;
          top: 5px;
          left: 5px;
        }
        .attributionAvatar {
          width: 50px;
          border-radius: 50px;
          display: inline-block;
        }
        .attributionUsername {
          display: inline-block;
          margin-left: 10px;
          position: relative;
          bottom: 15px;
        }
        .toolBar {
          height: 44px;
          padding: 1px 8px;
          border-bottom: 1px solid #ddd;
        }
        .toolBarItem {
          display: inline-block;
          width: 24px;
          margin-right: 20px;
          position: relative;
          top: 10px;
          float: right;
        }
        .editor {
          border-radius: 0 0 5px 5px;
        }
        .editor textarea {
          padding: 10px 8px;
          font-size: 15px;
          border: none;
          outline: 0;
          width: -webkit-fill-available;
        }
      `}</style>
    </div>
  )
}

export default Editor
