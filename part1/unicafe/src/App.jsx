import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
  <p>{text} {value}</p>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick} >{props.text}</button>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad;

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={total/3}/>
      <StatisticLine text="positive" value={`${(good/total)*100} %`}/>
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
        <Button handleClick={handleGood} text="good"/>
        <Button handleClick={handleNeutral} text="netural"/>
        <Button handleClick={handleBad} text="bad"/>
      </div>

      {good === 0 & neutral === 0 & bad === 0 ? 
      <p>No feedback given</p> :
      <Statistics good={good} neutral={neutral} bad={bad}/>}
    </>
  )
}

export default App