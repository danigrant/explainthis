import Link from 'next/link';

function MenuContainer() {
  return (
    <div className="wrapper">
      <div className="sizeContainer">
        <Link href="/">
          <div className="logo link">
            <img src="/images/logo.png" />
          </div>
        </Link>
        <div className="menu">
          <Link href="/leaderboard">
            <div className="link menu-item">
              <i className="material-icons">emoji_events_rounded</i>
                <a title="Leaderboard">Leaderboard</a>
            </div>
          </Link>
          <Link href="/explainer/@barackobama">
            <div className="link menu-item">
              <i className="material-icons">account_circle_rounded</i>
                <a title="Leaderboard">Profile</a>
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 0.2;
          color: white;
          margin-top: 20px;
        }
        i {
          width: 24px;
          position: relative;
          top: 5px;
          color: white;
          margin-right: 5px;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        a {
          margin-left: 5px;
        }
        .logo {
          display: inline-block;
          position: relative;
          margin-top: 20px;
          margin-left: 20px;
        }
        .logo img {
          width: 150px;
        }
        .menu {
          display: inline-block;
        }
        .menu-item:first-child {
          margin-top: 50px;
        }
        .menu-item {
          margin-left: 20px;
          margin-top: 30px;
        }
        .avatar {
          display: inline-block;
        }
        .avatar img {
          display: inline-block;
          width: 30px;
          border-radius: 50px;
          position: relative;
          top: 10px;
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

export default MenuContainer

// <Link href="/explainer/@barackobama">
//   <div className="avatar link">
//     <img src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
//   </div>
// </Link>
