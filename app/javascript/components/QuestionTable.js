import React from "react"
import ReactDOM from "react-dom"
import QueTr from "./QuestionTr"

export default class QueTable extends React.Component {

  constructor(props) {
    super();
    this.state = {
      questions: props.questions
    }
  }

  updateQuestion(refs) {
    $.ajax({
      url: `/api/v1/question_apis/${refs.id}`,
      type: 'PUT',
      data: {question: refs},
      async: false
    }).then((resp) => {
      console.log('resp', resp)
      this.updateQue(resp.question)
    })
  }

  updateQue(question) {
    var indx = this.state.questions.findIndex((que) => que.id == refs.id)
    var questions = this.state.questions;
    questions[indx] = refs;
    this.setState({questions: questions})
  }

  deleteQue(id) {
    $.ajax({
      url: `/api/v1/question_apis/${id}`,
      type: 'DELETE',
      async: false
    }).then((resp) => {
      this.removeQue(resp.id)
    })    
  }

  removeQue(id) {
    var questions = this.state.questions.filter((que) => que.id != id)
    this.setState({questions: questions})
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
            <th>Actions1</th>
            <th>Actions2</th>
          </tr>
        </thead>
        <tbody>
          { this.state.questions.map((question, key) => <QueTr 
              key={question.id} 
              question={question} 
              updateQuestion={this.updateQuestion.bind(this)}
              deleteQue={this.deleteQue.bind(this)} /> ) }
        </tbody>
      </table>
    );
  }
}

