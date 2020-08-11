import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Part = (props) => {
  console.log(props)
    return (
        <div>
            <p>{props.Part} {props.exercise}</p>
        </div>
    )
}
const Content = (props) => {
  console.log(props)
    return (
        <div>
            <Part Part={props.Part1} exercise={props.exercise1} />
            <Part Part={props.Part2} exercise={props.exercise2} />
            <Part Part={props.Part3} exercise={props.exercise3} />
        </div>
    )
}
const Total = (props) => {
  console.log(props)
    return (
        <div>
            <p>Total: {props.total}</p>
        </div>  
    )  
}
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
        <Header course={course} />
        <Content Part1={part1.name} Part2={part2.name} Part3={part3.name}
         exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
        <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>    
  )
}
ReactDOM.render(<App />,document.getElementById('root'));