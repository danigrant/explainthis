import Header from '../components/Header'
import AppContainer from '../components/AppContainer';
import ProfileExplanationsSection from '../components/ProfileExplanationsSection'

function Profile() {
  return (
    <div>
      <Header />
      <AppContainer>
        <div className="header">
          <div className="column">
            <img className="avatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
          </div>
          <div className="column">
            <h1 className="username">@barackobama</h1>
            <div className="header-stats">
              <div className="header-stat-item">
                <i className="material-icons">emoji_events_rounded</i>
                <p>Leaderboard Place • #15</p>
              </div>
              <div className="header-stat-item">
                <i className="material-icons">emoji_flags_rounded</i>
                <p>Points • 150</p>
              </div>
            </div>
          </div>
        </div>
        <div className="explanationsSection">
          <p>All of @barackobama's explanations:</p>
          <ProfileExplanationsSection />
        </div>
      </AppContainer>
      <style jsx>{`
        .avatar {
          border-radius: 100px;
          width: 100px;
        }
        .column {
          flex: 50%;
          display: inline-block;
        }
        .header-stat-item {
          display: inline-block;
        }
        .header-stat-item p {
          display: inline-block;
          margin-left: 5px;
        }
        .header-stat-item i {
          width: 24px;
          position: relative;
          top: 5px;
        }
        .header-stat-item:nth-of-type(2) {
          margin-left: 35px;
        }
        .header {
          border-bottom: 2px solid #ddd;
        }
        .username {
          margin-bottom: 5px;
          margin-top: 0px;
        }
        .column:nth-of-type(2) {
          margin-left: 15px;
          position: relative;
          bottom: 5px;
        }
        .explanationsSection p {
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Profile
