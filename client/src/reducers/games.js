import axios from 'axios'

const GAMES = 'GAMES'
const ADD_GAME = 'ADD_GAME'
const UPDATE_GAME = 'UPDATE_GAME'
const DELETE_GAME = 'DELETE_GAME'

export const getGames = (cb) => {
  return (dispatch) => {
    axios.get('/api/games')
    .then( ({data}) => {
      dispatch({ type: GAMES, games: data })
      cb()
    })
  }
}

export const addGame = (game) => {
  return (dispatch) => {
    axios.post('/api/games', {game} )
    .then( ({data}) => dispatch({ type: ADD_GAME, game: data }))
  }
}

export const updateGame = (game) => {
  return (dispatch) => {
    axios.put(`/api/games/${game.id}`, {game} )
    .then( ({data}) => dispatch({ type: UPDATE_GAME, game: data }))
  }
}

export const deleteGame = (id) => {
  debugger
  return (dispatch) => {
    axios.delete(`/api/games/${id}`)
    .then( () => dispatch({ type: DELETE_GAME, id }))
  }
}

export default ( state = [], action) => {
  switch(action.type) {
    case GAMES:
      return action.games
    case ADD_GAME:
      return [action.game, ...state]
    case UPDATE_GAME:
      return state.map( g => {
        if(action.game.id === g.id)
          return action.game
        return g
      })
    case DELETE_GAME:
      return state.filter(g => g.id !== action.id)
    default:
      return state
  }
}