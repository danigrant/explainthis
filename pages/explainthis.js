import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer';
import ActionBar from '../components/ActionBar'
import ExplanationsSection from '../components/ExplanationsSection'
import Editor from '../components/Editor'
import { getConceptExplanations } from '../components/Firebase'
import Loading from '../components/Loading'


class ExplainThis extends React.Component {
  constructor(props) {
    super(props) // first thing you always do, calls the master react constructor
    this.state = {
      showEditor: false,
      data: {}
    }
  }
  async componentDidMount() {
    this.setState({
      data: await getConceptExplanations('emergence')
    })
    console.log(this.state.data);
  }
  handleAnswerClick = () => { // es6 so that you don't have to bind this for scope
    this.setState({
      showEditor: !this.state.showEditor
    })
  }
  render() {
      {
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
                    <Editor />
                  }
                  <p>{this.state.data.explanations.length} Explanations</p>
                </div>
                <ExplanationsSection explanations={this.state.data.explanations} />
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

export default ExplainThis
