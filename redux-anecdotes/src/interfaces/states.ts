export interface IAnecdote {
    content: string;
    id?: string;
    votes: number;
}

export interface IFilter {
    filter: string;
}

export interface combinedState {
    anecdotes: IAnecdote[];
    filter: string;
    notification: string;
}