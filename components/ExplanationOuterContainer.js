import IndividualExplanationContainer from './IndividualExplanationContainer'
import RatingButton from './RatingButton'
import Button from './Button'

function ExplanationOuterContainer() {
  return (
    <div>
      <IndividualExplanationContainer>
      </IndividualExplanationContainer>
      <RatingButton>I got it.</RatingButton>
      <RatingButton>I didn't get it.</RatingButton>
      <Button>Add my own</Button>
    </div>
  )
}

export default ExplanationOuterContainer;
