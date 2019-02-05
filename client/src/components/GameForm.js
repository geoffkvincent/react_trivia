import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { addGame } from '../reducers/games'
import { Form } from 'semantic-ui-react'

class GameForm extends React.Component {
  state = { name: '', fireRedirect: false }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    const game = { name, }
    dispatch(addGame(game))
    this.setState({ name: '', fireRedirect: !this.state.fireRedirect})
  }

  render() {
    const { name } = this.state
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='name'
            placeholder='Name'
            label='Game Name'
            value={name}
            onChange={this.handleChange}
            />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Fragment>
    )
  }
}

export default connect()(GameForm)