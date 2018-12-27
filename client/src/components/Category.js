import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../reducers/cards'
import { Card, Container, Modal } from 'semantic-ui-react'

class Category extends React.Component {

  componentDidMount() {
    const {id} = this.props
    this.props.dispatch(getCards(id))
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
                  <li><h2>A.{card.answer_a}</h2></li>
                  <li><h2>B.{card.answer_b}</h2></li>
                  <li><h2>C.{card.answer_c}</h2></li>
                  <li><h2>D.{card.answer_d}</h2></li>
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
