import React from 'react'

class Card extends React.Component{
  render() {
    const { 
      answer_a,
      answer_b,
      answer_c,
      answer_d,
      correct_answer
    } = this.props
    return (
      <ul>
        <li>
          <h1>{answer_a}</h1>
        </li>
        <li>
          <h1>{answer_b}</h1>
        </li>
        <li>
          <h1>{answer_c}</h1>
        </li>
        <li>
          <h1>{answer_d}</h1>
        </li>
      </ul>
    )
  }
}

export default Card
