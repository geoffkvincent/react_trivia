import React from 'react'
import { Card, Container } from 'semantic-ui-react'

class Category extends React.Component{
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content><h1>100</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>100</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>100</h1></Card.Content>
          </Card>
          <Card>
            <Card.Content><h1>100</h1></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={4}>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
          <Card>
            <Card.Content></Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

export default Category