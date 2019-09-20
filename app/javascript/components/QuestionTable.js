import React from "react"
import ReactDOM from "react-dom"
import QueTr from "./QuestionTr"
// import PropTypes from "prop-types"

export default class QueTable extends React.Component {

  constructor(props) {
    super();
    this.state = {
      questions: props.questions
    }
  }

  render () {
    return (
      <table className='table table-hover table-stripped text-center'>
        <thead>
          <tr>
            <th>Pri</th>
            <th>Question</th>
            <th>Teaming Stages</th>
            <th>Appears (Day)</th>
            <th>Frequency</th>
            <th>Type</th>
            <th>Role</th>
            <th>Required?</th>
            <th>Conditions</th>
            <th>Mapping</th>
          </tr>
        </thead>
        <tbody>
          { this.state.questions.map((question, key) => <QueTr key={question.id} question={question} /> ) }
        </tbody>
      </table>
    );
  }
}

