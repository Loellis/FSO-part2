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

export default Course