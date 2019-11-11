import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer';
import { getPointsLeaderboard, getNumExplanationsLeaderboard } from '../components/Firebase'
import Loading from '../components/Loading'


class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leaderboard: []
    }
    this.handleRankByPoints = this.handleRankByPoints.bind(this)
    this.handleRankByNumExplanations = this.handleRankByNumExplanations.bind(this)
  }
  async componentDidMount() {
    let futureLeaderboard = await getPointsLeaderboard()
    console.log(futureLeaderboard); // this is the full array
    this.setState({
      leaderboard: futureLeaderboard
    })
    console.log(this.state.leaderboard); // this is an empty array
  }
  async handleRankByPoints() {
    this.setState({
      leaderboard: await getPointsLeaderboard()
    })
  }
  async handleRankByNumExplanations() {
    this.setState({
      leaderboard: await getNumExplanationsLeaderboard()
    })
  }
  render() {
    {
      if (this.state.leaderboard.length == 0) {
        return <Loading />
      } else {
        return (
          <div>
            <Header />
            <AppContainer>
              <div className="title">
                Leaderboard
              </div>
              <table>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th onClick={this.handleRankByPoints}>Points</th>
                  <th onClick={this.handleRankByNumExplanations}>Contributed</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{this.state.leaderboard[0].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[0].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[0].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{this.state.leaderboard[1].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[1].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[1].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{this.state.leaderboard[2].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[2].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[2].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>{this.state.leaderboard[3].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[3].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[3].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>{this.state.leaderboard[4].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[4].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[4].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>{this.state.leaderboard[5].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[5].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[5].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>{this.state.leaderboard[6].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[6].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[6].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>{this.state.leaderboard[7].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[7].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[7].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>{this.state.leaderboard[8].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[8].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[8].numContributedExplanations}</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>{this.state.leaderboard[9].username}</td>
                  <td className="centered-table-row">{this.state.leaderboard[9].points}</td>
                  <td className="centered-table-row">{this.state.leaderboard[9].numContributedExplanations}</td>
                </tr>
              </table>
            </AppContainer>
            <style jsx>{`
              .title {
                text-align: center;
                background-color: #00AFDD;
                padding: 10px;
                color: white;
                font-weight: bold;
                font-size: 28px;
                border-radius: 4px 4px 0 0;
              }
              table {
                background-color: white;
                width: 100%;
                text-align: left;
                border-collapse: collapse;
                font-size: 24px;
                border-radius: 0 0 2px 2px;
              }
              tr {
                border: none;
              }
              td {
                border-top: solid 1px #ddd;
                border-bottom: solid 1px #ddd;
                padding: 8px;
              }
              th {
                padding: 8px;
              }
              .centered-table-row {
                text-align: center
              }
            `}</style>
            <style jsx global>{`
              body {
                background: url('https://i.kinja-img.com/gawker-media/image/upload/m6ztwkawvypgrnn9k5o3.jpg') no-repeat center center fixed;
                background-size: cover;
              }
            `}</style>
          </div>
        )
      }
    }
  }
}

export default Leaderboard
