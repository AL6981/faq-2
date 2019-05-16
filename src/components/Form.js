import React from 'react'

const Form = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      <label>Question</label>
        <input type="text" name="question"></input>
      <label>Answer:</label>
        <input type="text" name="answer"></input>
      <input type="submit"></input>
    </form>
  )
}

export default Form
