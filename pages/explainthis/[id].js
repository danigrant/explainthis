import React from 'react'
import Header from '../../components/Header'
import AppContainer from '../../components/AppContainer';
import ActionBar from '../../components/ActionBar'
import ExplanationsSection from '../../components/ExplanationsSection'
import Editor from '../../components/Editor'
import { getConceptExplanations } from '../../components/Firebase'
import Loading from '../../components/Loading'
import { withRouter } from 'next/router'

class ExplainThis extends React.Component {
  constructor(props) {
    super(props) // first thing you always do, calls the master react constructor
    this.state = {
      showEditor: false,
      data: {}
    }
    const { router } = this.props
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this)
    this.handleUdatingDisplayedScores = this.handleUdatingDisplayedScores.bind(this)
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
        }
        else {
          return (
            <div>
              <Header />
              <AppContainer>
                <div className="explanationHeader">
                  <h1>What are all the different ways to explain {this.state.data.concept}?</h1>
                  <ActionBar handleAnswerClick={this.handleAnswerClick} />
                  { this.state.showEditor &&
                    <Editor handleSubmitAnswer={this.handleSubmitAnswer}/>
                  }
                  <p>{this.state.data.explanations.length} Explanations</p>
                </div>
                <ExplanationsSection handleUdatingDisplayedScores={this.handleUdatingDisplayedScores} explanations={this.state.data.explanations} />
              </AppContainer>
              <style jsx>{`
                .explanationHeader {
                  border-bottom: 1px solid #ddd;
                }
             `}</style>
            </div>
          )
        }
      }
  }
}

export default withRouter(ExplainThis)
