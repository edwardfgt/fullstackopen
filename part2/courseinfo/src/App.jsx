import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
    {parts.map((part) => {
      return (
        <Part part={part.name} exercises={part.exercises} key={part.id} />
      )
    })}
    </div>

  )
}

const Total = ({parts}) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
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

  return <DisplayCourses courses={courses} />
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const DisplayCourses = ({courses}) => {
  return (
    <>
    {courses.map(course => {
      return <Course course={course} key={course.id}/>
    })}
    </>
  )
}

export default App;