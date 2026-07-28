const Header = (props) => {
console.log(props)
return (
  <div>
    {props.course}
  </div>
)

}

const Content = (props) => {
console.log(props)
return (
  <div>
    {props.part} {props.exercises}
  </div>
)
}


const Total = (props) => {
console.log(props)
  return (
    <div>
      {props.ex1 + props.ex2 + props.ex3}
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />

    </div>
  )
}

export default App