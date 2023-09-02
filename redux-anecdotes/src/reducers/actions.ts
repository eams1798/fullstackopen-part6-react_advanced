/* deprecated */

export const voteFor = (id: string) => {
  return {
    type: "VOTE",
    payload: { id }
  }
}

export const newAnecdote = (content: string) => {
  return {
    type: "NEW_ANECDOTE",
    payload: { 
      content
     }
  }
}

export const setFilter = (filter: string) => {
  return {
    type: "SET_FILTER",
    payload: filter
  }
}