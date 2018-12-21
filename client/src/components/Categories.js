import React from 'react'
import { Card } from 'semantic-ui-react'

class Categories extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        <Card>
          <Card.Content textAlign='center'>
            <h2>React 101</h2>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign='center'>
            <h2>React es 2015</h2>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign='center'>React es6</Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign='center'>Advanced React</Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

export default Categories