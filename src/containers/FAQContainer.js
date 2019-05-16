import React from 'react';
import {Link} from 'react-router';
import Question from '../components/Question';
import Form from '../components/Form';

class FAQContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: []
    }
    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/questions')
    .then(response => response.json())
    .then(body => {
      this.setState({questions: body})
    })
  }

  addQuestion(formPayload){
    fetch('/api/v1/questions', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials: "same-origin",
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({questions: this.state.questions.concat(body)})
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.addQuestion({question:  event.target.question.value, answer: event.target.answer.value})
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>
        <div className='question-list'>
          {questions}
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default FAQContainer;
