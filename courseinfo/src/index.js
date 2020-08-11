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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course} />
        <Content Part1={part1} Part2={part2} Part3={part3}
         exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
        <Total total={exercises1 + exercises2 + exercises3} />
    </div>    
  )
}
ReactDOM.render(<App />,document.getElementById('root'));