import React from 'react'
import TopWrapper from '../../components/TopWrapper'
import MenuContainer from '../../components/MenuContainer'
import AppContainer from '../../components/AppContainer';
import ProfileExplanationsSection from '../../components/ProfileExplanationsSection'
import { getUsersExplanations, getUserPoints } from '../../components/Firebase'
import Loading from '../../components/Loading'
import { withRouter } from 'next/router'

class Explainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userPoints: {},
      explanationIndex: 0
    }
    const { router } = this.props
  }
  async componentDidMount() {
    const { router } = this.props
    this.setState({
      data: await getUsersExplanations(router.query.id),
      userPoints: await getUserPoints(router.query.id)
    })
  }
  incrementExplanation = () => {
    let newIndex = this.state.explanationIndex == this.state.data.explanations.length - 1 ? 0 : this.state.explanationIndex + 1
    this.setState({
      explanationIndex: newIndex
    })
    console.log('in incrementExplanation, new index is', this.state.explanationIndex, 'out of', this.state.data.explanations.length);
  }
  render() {
    {
      const { router } = this.props
      if (!this.state.data.explanations || !this.state.userPoints.points) {
        return <Loading />
      } else {
        return (
          <div>
            <TopWrapper>
            <MenuContainer />
            <AppContainer>
              <div className="header">
                <div className="column">
                  <img className="avatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
                </div>
                <div className="column">
                  <h1 className="username">{router.query.id}</h1>
                  <div className="header-stats">
                    <div className="header-stat-item">
                      <i className="material-icons">emoji_events_rounded</i>
                      <p>Leaderboard Place • #15</p>
                    </div>
                    <div className="header-stat-item">
                      <i className="material-icons">emoji_people_rounded</i>
                      <p>Contributed Explanations • {this.state.userPoints.numContributedExplanations}</p>
                    </div>
                    <div className="header-stat-item">
                      <i className="material-icons">emoji_flags_rounded</i>
                      <p>Points • {this.state.userPoints.points}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explanationsSection">
                <p>{`All of ${router.query.id}'s explanations:`}</p>
                <ProfileExplanationsSection incrementExplanation={this.incrementExplanation} currentExplanation={this.state.data.explanations[this.state.explanationIndex]} />
              </div>
            </AppContainer>
            </TopWrapper>
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
              .header-stat-item:not(:first-of-type) {
                margin-left: 35px;
              }
              .header {
                border-bottom: 2px solid #ddd;
              }
              .username {
                margin-bottom: 5px;
                margin-top: 0px;
              }
              .column:not(:first-of-type) {
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
    }
  }
}

export default withRouter(Explainer)
