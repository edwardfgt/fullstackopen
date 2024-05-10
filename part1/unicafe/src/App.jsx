import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad;

  return (
    <>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {total / 3}</p>
        <p>positive {(good/total)*100 } %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood);
  }
  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral);
  }
  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad);
  }

  

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      {good === 0 & neutral === 0 & bad === 0 ? 
      <p>No feedback given</p> :
      <Statistics good={good} neutral={neutral} bad={bad}/>}
    </>
  )
}

export default App