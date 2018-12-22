import axios from 'axios'

const CARDS = 'CARDS'

export const getCards = (id) => {
  debugger
  return (dispatch) => {
    axios.get(`/api/categories/${id}/cards`)
      .then( res => dispatch({ type: CARDS, cards: res.data }))
      debugger
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case CARDS:
    debugger
      return action.cards
    default:
      return state
  }
}