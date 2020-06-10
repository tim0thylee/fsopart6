import React from 'react'
import { updateFilter } from '../reducers/filterReducer'
import { useDispatch, connect } from 'react-redux'

const Filter = (props) => {
  // const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    props.updateFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  updateFilter,
}

const connectedFilter = connect(
  null,
  mapDispatchToProps
)(Filter)

export default connectedFilter