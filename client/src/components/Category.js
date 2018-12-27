import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../reducers/cards'
import Cards from './Card'
import { Card, Container, Modal } from 'semantic-ui-react'

class Category extends React.Component {

  componentDidMount() {
    debugger
    const {id} = this.props
    this.props.dispatch(getCards(id))
  }

  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Modal trigger={
              <Card.Content textAlign='center'><h1>100</h1></Card.Content>
            }>
            <Modal.Content>
              <Modal.Description>
                <Cards />
              </Modal.Description>
            </Modal.Content>
            </Modal>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(Category)
