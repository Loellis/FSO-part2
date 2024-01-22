const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Part = (props) => {
  return (
      <p>
        {props.name} {props.exercise}
      </p>
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum += part.exercises, 0)
  return(
    <div>
      <p><strong>Total number of exercises {totalExercises}</strong></p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      {course.parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises}/>)}
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = { 
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'This is a simple test',
        exercises: 0,
        id: 4
      }
    ]
  } 

  return <Course course={course} />
}

export default App