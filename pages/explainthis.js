import Header from '../components/Header'
import AppContainer from '../components/AppContainer';
import ActionBar from '../components/ActionBar'
import ExplanationsSection from '../components/ExplanationsSection'

function ExplainThis() {
  return (
    <div>
      <Header />
      <AppContainer>
        <div className="explanationHeader">
          <h1>What is the best way to explain Emergence?</h1>
          <ActionBar />
          <p>2 Explanations</p>
        </div>
        <ExplanationsSection />
      </AppContainer>
      <style jsx>{`
        .explanationHeader {
          border-bottom: 1px solid #ddd;
        }
     `}</style>
    </div>
  )
}

export default ExplainThis
