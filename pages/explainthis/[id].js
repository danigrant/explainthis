import React from 'react'
import TopWrapper from '../../components/TopWrapper'
import MenuContainer from '../../components/MenuContainer'
import AppContainer from '../../components/AppContainer';
import ActionBar from '../../components/ActionBar'
import ExplanationsSection from '../../components/ExplanationsSection'
import Editor from '../../components/Editor'
import { getConceptExplanations } from '../../components/Firebase'
import Loading from '../../components/Loading'
import { withRouter } from 'next/router'
import AddExplanation from '../../components/AddExplanation'

class ExplainThis extends React.Component {
  constructor(props) {
    super(props) // first thing you always do, calls the master react constructor
    this.state = {
      showEditor: false,
      data: {},
      explanationIndex: 0
    }
    const { router } = this.props
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this)
    this.handleUdatingDisplayedScores = this.handleUdatingDisplayedScores.bind(this)
    this.parentHandleVote = this.parentHandleVote.bind(this)
  }
  async componentWillMount() {
    const { router } = this.props
    this.setState({
      data: await getConceptExplanations(router.query.id)
    })
  }
  handleAnswerClick = () => {
    this.setState({
      showEditor: !this.state.showEditor
    })
  }
  async parentHandleVote() {
    const { router } = this.props
    // this.setState({
    //   data: await getConceptExplanations(router.query.id)
    // })
  }
  incrementExplanation = () => {
    let newIndex = this.state.explanationIndex == this.state.data.explanations.length - 1 ? 0 : this.state.explanationIndex + 1
    this.setState({
      explanationIndex: newIndex
    })
    console.log('in incrementExplanation, new index is', this.state.explanationIndex, 'out of', this.state.data.explanations.length);
  }
  async handleSubmitAnswer() {
    const { router } = this.props
    this.setState({
      showEditor: !this.state.showEditor,
      data: await getConceptExplanations(router.query.id)
    })
  }
  async handleUdatingDisplayedScores() {
    const { router } = this.props
    await new Promise(cb => setTimeout(cb, 500)) // this is extremely silly: i am waiting 500ms for firebase to update otherwise there is a lag and the score looks like it's 1
    this.setState({
      data: await getConceptExplanations(router.query.id)
    })
  }
  render() {
      {
        const { router } = this.props
        if (!this.state.data.concept) {
          return <Loading />
        } else if (this.state.showEditor) {
          return (
            <TopWrapper>
              <MenuContainer />
                <AppContainer>
                  <AddExplanation handleAnswerClick={this.handleAnswerClick} />
                </AppContainer>
                </TopWrapper>
          )
        }
        else {
          return (
            <div className="wrapper">
            <TopWrapper>
              <MenuContainer />
                <AppContainer>
                  <div className="explanationHeader">
                    <h1>The short, sweet and wonderfully wacky ways to explain <span className="concept-name">{this.state.data.concept}</span></h1>
                    <p>{this.state.data.explanations.length} Explanations • Keep clicking through until you find one that, well, clicks.</p>
                    <ActionBar handleAnswerClick={this.handleAnswerClick} />
                    { this.state.showEditor &&
                      <Editor handleSubmitAnswer={this.handleSubmitAnswer}/>
                    }
                  </div>
                  <ExplanationsSection parentHandleVote={this.parentHandleVote} handleUdatingDisplayedScores={this.handleUdatingDisplayedScores} incrementExplanation={this.incrementExplanation} currentExplanation={this.state.data.explanations[this.state.explanationIndex]} />
                </AppContainer>
              </TopWrapper>
              <style jsx>{`
                .wrapper {
                  width: 100%;
                }
                .explanationHeader h1 {
                  margin-bottom: 0;
                  font-weight: 900;
                }
                .explanationHeader p {
                  margin-top: 10px;
                  margin-bottom: 5px;
                  color: #a9a9a9;
                }
                .concept-name {
                  color: #6462EF;
                }
                ActionBar {
                  margin-bottom: 10px;
                }
             `}</style>
            </div>
          )
        }
      }
  }
}

export default withRouter(ExplainThis)
