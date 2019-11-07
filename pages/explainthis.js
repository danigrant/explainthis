import Header from '../components/Header'
import AppContainer from '../components/AppContainer';
import ExplanationOuterContainer from '../components/ExplanationOuterContainer';

function ExplainThis() {
  return (
    <div>
      <Header />
      <AppContainer>
        <h1>Emergence</h1>
        <ExplanationOuterContainer>
        </ExplanationOuterContainer>
      </AppContainer>
      <style jsx>{`
        h1 {
          font-weight: bolder;
          font-size: 42px;
        }
        h2 {
          font-weight: normal;
          font-size: 18px;
        }
     `}</style>
     <style global jsx>{`
       body {
         font-family: -apple-system, 'IBM Plex Sans', sans-serif;
       }
     `}</style>
    </div>
  )
}

export default ExplainThis
