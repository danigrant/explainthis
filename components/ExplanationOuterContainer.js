import IndividualExplanationContainer from './IndividualExplanationContainer'
import RatingButton from './RatingButton'
import Button from './Button'

function ExplanationOuterContainer() {
  return (
    <div>
      <div>
      <p>Emergence Explanation 1/1</p>
        <div className="flexWrapper">
          <IndividualExplanationContainer>
          </IndividualExplanationContainer>
          <div className="ratingButtonContainer">
            <RatingButton mainColor="#AB96FF" bottomColor="#A20DE8">
              <img className="internalButtonContentImg" src="/images/dont-get-it-face.png"/>
              <p className="internalButtonContentP">Explain it to me a new way.</p>
            </RatingButton>
            <RatingButton mainColor="#B775E0" bottomColor="#9F0B37">
              <img className="internalButtonContentImg" src="/images/get-it-face.png"/>
              <p className="internalButtonContentP">Aha! Yippeee!<br />I get it now!</p>
            </RatingButton>
          </div>
          <div className="ratingButtonContainer">
          </div>
        </div>
        <div className="contributeButton">
          <Button text="Contribute Your Own Explanation"/>
        </div>
      </div>
      <style jsx>{`
        .flexWrapper {
          margin-top: 20px;
          display: flex;
          flex: 1;
          justify-content: space-around;
        }
        .ratingButtonContainer {
          margin-left: 20px;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-around;
        }
        .internalButtonContentImg {
          width: 65px;
          height: 65px;
        }
        .internalButtonContentP {
          margin: 0;
        }
        .contributeButton {
          margin-top: 20px;
          text-align: center;
        }
        @media (max-width: 600px) {
          .flexWrapper {
            display: inherit;
          }
          .ratingButtonContainer {
            margin: 0;
            margin-top: 20px;
            justify-content: space-between;
            flex-direction: row;
          }
          .contributeButton {
            margin-top: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default ExplanationOuterContainer;
