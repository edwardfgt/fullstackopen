import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})

  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);   
    setSelected(random);
  }

  const handleVote = () => {
    const copy = { ...points };
    if (copy[selected] === undefined) {
      copy[selected] = 1;
    } else {
      copy[selected] += 1;
    }
    setPoints(copy);
  } 

  return (
    <div>
      <div>
        {anecdotes[selected]}
        <br/>
        has {points[selected] || 0} votes
        <br/><br/>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <MostVotedAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}

const MostVotedAnecdote = ({ anecdotes, points }) => {
  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...Object.values(points), 0)
    const mostVotedIndex = Object.keys(points).find(key => points[key] === maxVotes)
    return mostVotedIndex
  }

  const mostVotedIndex = getMostVotedAnecdote()

  return (
    <div>
      <h2>Most voted anecdote</h2>
      {mostVotedIndex !== undefined ? (
        <div>
          {anecdotes[mostVotedIndex]}
          <br/>
          has {points[mostVotedIndex]} votes
        </div>
      ) : (
        <div>No votes yet</div>
      )}
    </div>
  )
}

export default App
