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