import React from "react"
import ReactDOM from "react-dom"
// import PropTypes from "prop-types"

export default class QueTr extends React.Component {

  constructor(props) {
    super();
    this.state = {
      edit: false,
      refs: props.question
    }
  }

  updateQuestion(event){
    this.props.updateQuestion(this.state.refs)
    this.setState({ edit: false })
  }

  changeRef(ref, event) {
    var refs = this.state.refs;
    refs[ref] = event.target.value
    this.setState({refs: refs})
  }

  render_fast() {
    var tr = '';
    var question = this.props.question;
    if (this.state.edit){
      tr = (<tr>
            <td ref='priority'><input type='number' className='form-control' value={this.state.refs.priority} name='priority' onChange={this.changeRef.bind(this, 'priority')} /></td>
            <td ref='que_text'><input type='text' className='form-control' value={this.state.refs.que_text} name='que_text' onChange={this.changeRef.bind(this, 'que_text')} /></td>
            <td ref='teaming_stages'><input type='text' className='form-control' value={this.state.refs.teaming_stages} name='teaming_stages' onChange={this.changeRef.bind(this, 'teaming_stages')} /></td>
            <td ref='appears'><input type='number' className='form-control' value={this.state.refs.appears} name='appears' onChange={this.changeRef.bind(this, 'appears')} /></td>
            <td ref='frequency'><input type='number' className='form-control' value={this.state.refs.frequency} name='frequency' onChange={this.changeRef.bind(this, 'frequency')} /></td>
            <td ref='que_type'><input type='text' className='form-control' value={this.state.refs.que_type} name='frequency' onChange={this.changeRef.bind(this, 'que_type')} /></td>
            <td ref='role'>{this.state.refs.role}</td>
            <td ref='required'><input type='checkbox' defaultChecked={this.state.refs.required} name='required' onChange={this.changeRef.bind(this, 'required')} /></td>
            <td ref='conditions'><input type='text' className='form-control' value={this.state.refs.conditions} name='conditions' onChange={this.changeRef.bind(this, 'conditions')} /></td>
            <td ref='mapping'>{this.state.refs.mapping}</td>
            <td onClick={() => this.updateQuestion()}><a href='javascript:void(0)'>Update</a></td>
            <td onClick={() => this.setState({edit: false})}><a href='javascript:void(0)'>Cancel</a></td>
          </tr>);
    } else {
      tr = (<tr id={question.id}>
              <td>{question.priority}</td>
              <td>{question.que_text}</td>
              <td>{question.teaming_stages}</td>
              <td>{question.appears}</td>
              <td>{question.frequency}</td>
              <td>{question.que_type}</td>
              <td>{question.role}</td>
              <td>{question.required.toString()}</td>
              <td>{question.conditions}</td>
              <td>{question.mapping}</td>
              <td onClick={() => this.setState({edit: true})}><a href='javascript:void(0)'>Edit</a></td>
              <td onClick={() => this.props.deleteQue(question.id)}><a href='javascript:void(0)'>Delete</a></td>
            </tr>)
    }
    return tr;
  }

  render () {
    return this.render_fast()
  }
}

