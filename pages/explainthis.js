import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer';
import ActionBar from '../components/ActionBar'
import ExplanationsSection from '../components/ExplanationsSection'
import mockData from '../mockconceptdata'
import TempAddAnswer from './TempAddAnswer'


class ExplainThis extends React.Component {
  constructor(props) {
    super(props) // first thing you always do, calls the master react constructor
    this.state = {
      showEditor: false
    }
  }
  componentDidMount() {
    
  }
  handleAnswerClick = () => { // es6 so that you don't have to bind this for scope
    this.setState({
      showEditor: !this.state.showEditor
    })
  }
  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          <div className="explanationHeader">
            <h1>What are all the different ways to explain {mockData.concept}?</h1>
            <ActionBar handleAnswerClick={this.handleAnswerClick} />
            { this.state.showEditor &&
              <TempAddAnswer />
            }
            <p>{mockData.explanations.length} Explanations</p>
          </div>
          <ExplanationsSection explanations={mockData.explanations} />
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

export default ExplainThis
