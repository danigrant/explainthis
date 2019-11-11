import Link from 'next/link';

function Header() {
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
            <div className="avatar link">
              <img src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          background-color: white;
          z-index: 1;
          border-bottom: 1px solid #ddd;
          padding-bottom: 15px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
        }
        .sizeContainer {
          width: 750px;
          margin: 0 auto;
        }
        i {
          width: 24px;
          position: relative;
          top: 5px;
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
          top: 9px;
        }
        .logo img {
          width: 150px;
        }
        .menu {
          display: inline-block;
        }
        .menu-item {
          display: inline-block;
          margin-left: 50px;
          color: #5a5a5a;
        }
        .avatar {
          display: inline-block;
          margin-left: 400px;
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

export default Header
