import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../reducers/cards'
import GameCard from './Card'
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
        <Card.Group itemsPerRow={4}>
          { cards.map(card => 
          <Card>
            <Modal trigger={
              <Card.Content style={{cursor: "pointer"}} textAlign='center'>
                <h1>{card.points}</h1>
              </Card.Content>
            }>
            <Modal.Content>
              <Modal.Description>
                <GameCard {...cards}/>
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
