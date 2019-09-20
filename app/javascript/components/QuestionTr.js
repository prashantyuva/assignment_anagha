import React from "react"
import ReactDOM from "react-dom"
// import PropTypes from "prop-types"

export default class QueTr extends React.Component {

  constructor(props) {
    super();
    console.log(props.question)
    this.state = {
      question: props.question
    }
  }

  render () {
    return (
      <tr>
        <td>{this.state.question.priority}</td>
        <td>{this.state.question.que_text}</td>
        <td>{this.state.question.teaming_stages}</td>
        <td>{this.state.question.appears}</td>
        <td>{this.state.question.frequency}</td>
        <td>{this.state.question.que_type}</td>
        <td>{this.state.question.role}</td>
        <td>{this.state.question.required.toString()}</td>
        <td>{this.state.question.conditions}</td>
        <td>{this.state.question.mapping}</td>
      </tr>
    );
  }
}

