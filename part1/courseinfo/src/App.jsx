import Header from '/src/components/Header';
import Part from '/src/components/Part';
import Total from '/src/components/Total';

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
      <Header course={course}/>
      <Part part={part1} number={exercises1}/>
      <Part part={part2} number={exercises2}/>
      <Part part={part3} number={exercises3}/>
      <Total numbers={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App