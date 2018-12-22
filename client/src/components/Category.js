import React from 'react'
import { connect } from 'react-redux'
import Cards from './Card'
import { Card, Container, Modal, } from 'semantic-ui-react'

class Category extends React.Component{
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
                <Cards/>
              </Modal.Description>
            </Modal.Content>
            </Modal>
          </Card>
          <Card>
            <Card.Content textAlign='center'><h1>100</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign='center'><h1>100</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign='center'><h1>100</h1></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content><h1>200</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>200</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>200</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>200</h1></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content><h1>300</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>300</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>300</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>300</h1></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content><h1>400</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>400</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>400</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>400</h1></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content><h1>500</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>500</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>500</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>500</h1></Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = () => {
  
}

export default connect(mapStateToProps)(Category)