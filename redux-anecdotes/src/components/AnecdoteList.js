import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
    // const anecdotes = useSelector(state => state.anecdotes)
    // const filteredWord = useSelector(state => state.filtered)
    // const dispatch = useDispatch()
  
    const vote = (id) => {
      const anecdote = props.anecdotes.find(anecdote => anecdote.id === id)
      props.updateVote(id, anecdote)
      props.setNotification(anecdote.content, 3)
    }

    return (
        <>
            {props.anecdotes
                .sort((a, b) => b.votes - a.votes)
                .filter(anecdote => anecdote.content.toLowerCase().includes(props.filteredWord.toLowerCase()))
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

const mapDispatchToProps = dispatch => {
    return {
        updateVote: (id, content) => {
            dispatch(updateVote(id, content))
        },
        setNotification: (content, time) => {
            dispatch(setNotification(content, time))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filteredWord: state.filtered
    }
}

const connectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default connectedAnecdotes