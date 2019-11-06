import IndividualExplanationContainer from './IndividualExplanationContainer'

function ExplanationOuterContainer() {
  return (
    <div>
      <IndividualExplanationContainer>
      </IndividualExplanationContainer>
      <button>I got it.</button>
      <button>I didn't get it.</button>
      <button>Add my own</button>
    </div>
  )
}

export default ExplanationOuterContainer;
