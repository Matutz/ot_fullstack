import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



const Print_q = (props) => {
  console.log(props.points)
  
  
  const vote =()=>{
    props.points[props.selected]+=1;
  }
  
  if (props.selected === null) {
    return (
        <p>
        the app is used by pressing the buttons
        </p>
    )
  }
  

  return(

    <div>
      {props.anecdotes[props.selected]}
      <p>
        Has {props.points[props.selected]} votes
        <button onClick={vote}>vote</button>
      </p>
      
    </div>
      
  )
}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

const Print_most = (props) => {
  var i = indexOfMax(props.points)

  return(
    <div>
      <p>
        Most popular quote:
      </p>
      {props.anecdotes[i]}
    </div>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(null)
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0))
 
  const handleClick = () => {    
    setSelected(Math.floor(Math.random()*props.anecdotes.length))
   
  }
  console.log(selected)
  return (
    <React.Fragment>
      
    <div>
      <h1>Inspiration for your day!</h1>
      <Print_q selected={selected} anecdotes={anecdotes} points={points}/>
     
      <button onClick={handleClick}>new</button>
      
      


    </div>
    <Print_most anecdotes={anecdotes} points={points}/>
    </React.Fragment>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)