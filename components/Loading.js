import MenuContainer from '../components/MenuContainer'
import AppContainer from '../components/AppContainer';

function Loading() {
  return (
    <div>
      <MenuContainer />
      <AppContainer>
        <p>loading...</p>
      </AppContainer>
    </div>
  )
}

export default Loading
