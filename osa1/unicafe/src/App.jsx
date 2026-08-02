import { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}



const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.total} />
      <StatisticsLine text="average" value={props.average} />
      <StatisticsLine text="positive" value={props.positive + " %"} />
    </tbody></table></div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics
        good={good} bad={bad} neutral={neutral}
        total={total} average={average} positive={positive}
      />
    </div>
  )
}

export default App