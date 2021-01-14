import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Heading=(props)=>{
  return(
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}
/* Button component is made and event handler handleClick 
 as well as the title is passed as props */
const Button=(props)=>{
  return(
    <div>
      <button  onClick={props.onClick}> {props.text}</button>
    </div>
  )
}
const Statistics=(props)=>{
  return(
    <div>
      {props.text}
      {props.value}
    </div>
  )
  }
const App=()=>{
  const [good,setGood]=useState(0)
  const[neutral,setNeutral ]=useState(0)
  const[bad,setBad]=useState(0)
  const all=good+bad+neutral  

const handleGood=()=>{
  setGood(good+1)
}
const handleNeutral=()=>{
  setNeutral(neutral+1)
}
const handleBad=()=>{
  setBad(bad+1)
}
const Average=()=>{
  let averageVal = (good+bad*(-1)+neutral*0)/all
return(
  <div>
    Average: {averageVal}
  </div>
)
}
const Positive=()=>{
return(
  <div>
    Positive:{((good*100)/all)+'%'}
  </div>
)
}

const Total=(props)=>{
  return(
    <div>
      Total={good+bad+neutral}
  </div>
  )
}
  return(
    <div>
      <Heading name={'Give feedback'}/>
            <Button onClick={handleGood}text={'good'}/>
            <Button onClick={handleNeutral} text={'neutral'}/>
            <Button  onClick={handleBad} text={'bad'}/>
            <Heading name={'Statistics'}
               />
            {
              (good||neutral||bad)
              ?<>     
               <Statistics text={'good'} value={good} />
               <Statistics text={'neutral'} value={neutral} />
               <Statistics text={'bad'} value={bad} />
               <Average />
               <Positive />
               <Total />
              
               </>
               :<h1>There is no feedback given</h1>
            }
    </div>
  )
}
ReactDOM.render(  
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
