import axios from 'axios'

const CARDS = 'CARDS'

export const getCards = () => {
  return (dispatch) => {
    axios.get(`/api/categories/${id}/cards`)
      .then( res => dispatch({ cards: res.data }))
  }
}