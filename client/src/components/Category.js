import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../reducers/cards'
import { Card, Container, Modal } from 'semantic-ui-react'

class Category extends React.Component {
  state = { userAnswer: '' }

  componentDidMount() {
    const {id} = this.props
    this.props.dispatch(getCards(id))
  }

  handleClickA = () => {
    this.setState({ userAnswer: 'a' })
    this.answerCheck()
  }

  handleClickB = () => {
    this.setState({ userAnswer: 'b' })
    this.answerCheck()
  }

  handleClickC = () => {
    this.setState({ userAnswer: 'c' })
  }

  handleClickD = () => {
    this.setState({ userAnswer: 'd' })
  }

  answerCheck = () => {
    
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
                      onClick={this.handleClickA}
                    >
                      A.{card.answer_a}
                    </h2>
                  </li>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={this.handleClickB}
                    >
                      B.{card.answer_b}
                    </h2>
                  </li>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={this.handleClickC}
                    >
                      C.{card.answer_c}
                    </h2>
                  </li>
                  <li>
                    <h2 
                      style={{cursor: "pointer"}} 
                      onClick={this.handleClickD}
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
