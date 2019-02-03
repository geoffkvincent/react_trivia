import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>React Trivia</Header>
      </Container>
    )
  }
}

export default Home