import Header from '../components/Header'
import AppContainer from '../components/AppContainer';

function Leaderboard() {
  return (
    <div>
      <Header />
      <AppContainer>
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
