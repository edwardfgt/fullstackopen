import Header from '/src/components/Header';
import Part from '/src/components/Part';
import Total from '/src/components/Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Part part={part1.name} number={part1.exercises}/>
      <Part part={part2.name} number={part2.exercises}/>
      <Part part={part3.name} number={part3.exercises}/>

      <Total numbers={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App