import Link from 'next/link';

function ActionBar(props) {
  return (
    <div className="actionBar">
      <div onClick={props.handleAnswerClick} className="actionBarItem">
        <i className="material-icons">edit_rounded</i>
        <a title="Home">Add Your Own</a>
      </div>
      <style jsx>{`
        .actionBarItem {
          display: inline-block;
          color: white;
          background-color: #A3D066;
          border-radius: 20px;
          padding: 5px;
          padding-right: 15px;
          padding-left: 15px;
          margin-top: 10px;
        }
        .actionBarItem:nth-of-type(2) {
          margin-left: 35px;
        }
        i {
          width: 24px;
          position: relative;
          top: 5px;
        }
        a {
          text-decoration: none;
          color: inherit;
          margin-left: 5px;
          position: relative;
          bottom: 2px;
        }
      `}</style>
    </div>
  )
}

export default ActionBar
