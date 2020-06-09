import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { updateNotification, removeNotification, setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filteredWord = useSelector(state => state.filtered)
    const dispatch = useDispatch()
  
    const vote = (id) => {
      const anecdote = anecdotes.find(anecdote => anecdote.id === id)
      console.log('hit')
      dispatch(updateVote(id, anecdote))
      dispatch(setNotification(anecdote.content, 3))
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