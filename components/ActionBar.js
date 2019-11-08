import Link from 'next/link';

function ActionBar(props) {
  return (
    <div className="actionBar">
      <div onClick={props.handleAnswerClick} className="actionBarItem">
        <i className="material-icons">edit_rounded</i>
        <a title="Home">Add Your Own</a>
      </div>
      <div className="actionBarItem">
        <i className="material-icons">emoji_people_rounded</i>
        <Link href="/">
          <a title="Home">Phone A Friend</a>
        </Link>
      </div>
      <style jsx>{`
        .actionBarItem {
          display: inline-block;
          color: #5a5a5a;
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
        }
      `}</style>
    </div>
  )
}

export default ActionBar
