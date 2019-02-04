import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

class GameForm extends React.Component {
  state = { name: '', showForm: false }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { name } = this.state
    return (
      <Form onSubmit={this.handelSubmit}>
        <Form.Input
          name='name'
          placeholder='Name'
          label='Game Name'
          value={name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default connect()(GameForm)