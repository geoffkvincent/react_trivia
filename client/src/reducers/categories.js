import axios from 'axios'

const CATS = 'CATS'
const ADD_CAT = 'ADD_CAT'

export const getCats = (id) => {
  debugger
  return (dispatch) => {
    axios.get(`/api/games/${id}/categories`)
    .then( res => dispatch({ type: CATS, cats: res.data }))
  }
}

export const addCat = (id, cats) => {
  return (dispatch) => {
    for ( let i = 0 ; i < cats.length ; i++) {
      axios.post(`/api/games/${id}/categories`, cats[i] )
    .then( ({data}) => dispatch({ type: ADD_CAT, cat: data }))
    }
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case CATS:
      return action.cats
    case ADD_CAT:
      return [action.game, ...state]
    default:
      return state
  }
}
