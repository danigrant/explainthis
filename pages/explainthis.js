import AppContainer from '../components/AppContainer';
import ExplanationOuterContainer from '../components/ExplanationOuterContainer';

function ExplainThis() {
  return (
    <div>
      <AppContainer>
        <h1>Emergence</h1>
        <h2>We all understand things differently. That’s a feature! Not a bug. ExplainThis collects different explanations of  so you can keep clicking through until you stumble upon one that creates that aha! moment for you. </h2>
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
         font-family: 'IBM Plex Sans', sans-serif;
       }
     `}</style>
    </div>
  )
}

export default ExplainThis
