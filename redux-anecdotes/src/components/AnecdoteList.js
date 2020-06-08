import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { updateNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filteredWord = useSelector(state => state.filtered)
    const dispatch = useDispatch()
  
    const vote = (id) => {
      dispatch(updateVote(id))
      const anecdote = anecdotes.find(anecdote => anecdote.id === id).content
      dispatch(updateNotification(`you voted '${anecdote}'`))
      setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
    }

    return (
        <>
            {anecdotes
                .sort((a, b) => b.votes - a.votes)
                .filter(anecdote => anecdote.content.toLowerCase().includes(filteredWord.toLowerCase()))
                .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                    {anecdote.content}
                    </div>
                    <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList