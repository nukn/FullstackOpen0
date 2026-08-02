const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => 
        <Part key={part.name} part={part} />
      )}
    </div>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
     <b> Total: {total}</b>
    </div>
  )
}

const Course = (props) => {
  return (
      <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  )
}


export default Course