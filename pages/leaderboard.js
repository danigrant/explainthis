import Header from '../components/Header'
import AppContainer from '../components/AppContainer';

function Leaderboard() {
  return (
    <div>
      <Header />
      <AppContainer>
        <div className="title">
          Leaderboard
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last 30 Days</th>
            <th>All Time</th>
          </tr>
          <tr>
            <td>1</td>
            <td>@barackobama</td>
            <td>15</td>
            <td>150</td>
          </tr>
          <tr>
            <td>2</td>
            <td>@bo</td>
            <td>14</td>
            <td>20</td>
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

export default Leaderboard
