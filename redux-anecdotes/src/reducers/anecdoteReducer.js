import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch (action.type) {
    case 'UPDATE_VOTE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        votes: noteToChange.votes + 1
      }
      return state.map(note => note.id !== id ? note : changedNote)
    case 'CREATE_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
    return state
  }
}

export const updateVote = (id, anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateVote(anecdote)
    dispatch({
      type: 'UPDATE_VOTE',
      data: {id}
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({  
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer