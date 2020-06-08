const FILTERED_WORD = 'FILTERED_WORD'
const reducer = (state = '', action) => {
    switch(action.type) {
        case FILTERED_WORD:
            return action.filteredWord
        default:
            return state
    }
}

export const updateFilter = (filteredWord) => {
    return {
        type: FILTERED_WORD,
        filteredWord
    }
}

export default reducer