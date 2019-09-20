import React from "react"
import ReactDOM from "react-dom"
import QueTable from "./QuestionTable"
// import PropTypes from "prop-types"

export default class QuestionsIndex extends React.Component {

  constructor(props) {
    super();
    this.state = {
      questions: props.questions
    }
  }

  render () {
    return (
      <div className='col-12 card m-auto top-40'>
        <QueTable questions={this.state.questions} />
      </div>
    );
  }
}

