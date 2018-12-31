import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../reducers/cards'
import { Card, Container, Modal } from 'semantic-ui-react'

class Category extends React.Component {
  state = { userAnswer: '', currentId: '' }

  componentDidMount() {
    const {id} = this.props
    this.props.dispatch(getCards(id))
  }

  handleClickA = (id) => {
    const {cards} = this.props
    const {userAnswer, currentId } = this.state
    this.setState({ userAnswer: 'a', currentId: id })
    const check = cards.find(card => card.id === currentId)
    if (check.correct_answer === userAnswer) {
      console.log('Winner')
    } else {
      console.log('Loser')
    }
  }

  handleClickB = (id) => {
    debugger
    this.setState({ userAnswer: 'b', currentId: id })
  }

  handleClickC = (id) => {
    this.setState({ userAnswer: 'c', currentId: id }) 
  }

  handleClickD = (id) => {
    this.setState({ userAnswer: 'd', currentId: id })
  }

  answerCheck = () => {
    debugger
    const {cards} = this.props
    const {userAnswer, currentId } = this.state
    const check = cards.find(card => card.id === currentId)
    debugger
    if (check.correct_answer === userAnswer) {
      debugger
      console.log('Winner')
    } else {
      console.log('Loser')
    }
  }

  render() {
    const { cards } = this.props
    return (
      <Container>
        <Card.Group itemsPerRow={1}>
          { cards.map(card => 
          <Card key={card.id}>
            <Modal trigger={
              <Card.Content style={{cursor: "pointer"}} textAlign='center'>
                <h1>{card.points}</h1>
              </Card.Content>
            }>
            <Modal.Content>
              <Modal.Description>
                <ul>
                  <h1>{card.question}</h1>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={() => this.handleClickA(card.id)}
                    >
                      A.{card.answer_a}
                    </h2>
                  </li>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={() => this.handleClickB(card.id)}
                    >
                      B.{card.answer_b}
                    </h2>
                  </li>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={() => this.handleClickC(card.id)}
                    >
                      C.{card.answer_c}
                    </h2>
                  </li>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={() => this.handleClickD(card.id)}
                    >
                      D.{card.answer_d}
                    </h2>
                  </li>
                </ul>
              </Modal.Description>
            </Modal.Content>
            </Modal>
          </Card>
          )}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(Category)
