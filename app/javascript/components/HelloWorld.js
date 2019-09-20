import React from "react"
import ReactDOM from "react-dom"
// import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
        <h1>Hello: {this.props.greeting}</h1>
    );
  }
}

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
export default HelloWorld
