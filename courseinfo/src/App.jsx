const Title = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Header = ({courseName}) => {
  return (
    <div>
      <h2>{courseName}</h2>
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

const Total = ({courseParts}) => {
  const totalExercises = courseParts.reduce((sum, part) => sum += part.exercises, 0)
  return(
    <div>
      <p><strong>Total number of exercises {totalExercises}</strong></p>
    </div>
  )
}

const Course = ({ courses }) => {
  return (
    <div>
      <Title title="Web development curriculum" />
      {courses.map((course) => (
        <div key={course.id}>
          <Header courseName={course.name} />
          {course.parts.map((part) => (
            <Part key={part.id} name={part.name} exercise={part.exercises} />
          ))}
          <Total courseParts={course.parts} />
        </div>
      ))}
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App