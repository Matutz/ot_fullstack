import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

const StatisticLine= (props) => {
  return(
  <tr>
  <td>{props.text}  </td>
  <td>{props.value} </td>
  </tr>
  )
}

const Stats = (props) => {
 
  if (sum(props) === 0) {
    return (
      <tbody>
      <tr>
        <td>
        the app is used by pressing the buttons
        </td>
      </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      <StatisticLine text="Good" value ={props.Good} />
      <StatisticLine text="Neutral" value ={props.Neutral} />
      <StatisticLine text="Bad" value ={props.Bad} />
      <StatisticLine text="Average" value ={average(props)} />
      <StatisticLine text="Positives" value ={positive_pros(props)} />
    </tbody>
  )
}

function average (obj)  {
  //console.log(obj)
  var ave = (obj.Good-obj.Bad)/(sum(obj));
  
  return (ave).toFixed(2);
}
function positive_pros (obj)  {
  //console.log(obj)
  var pros = (obj.Good*100)/(sum(obj));
  
  return (pros).toFixed(1); ;
}

const App = () => {
  const [Neutral, setNeutral] = useState(0)
  const [Good, setGood] = useState(0)
  const [Bad, setBad] = useState(0)
  
  
  const handleNeutralClick = () => {    
     
    setNeutral(Neutral + 1)  }

  const handleBadClick = () => {    
 
    setBad(Bad + 1)  }

  const handleGoodClick = () => {   
    
    setGood(Good + 1)  }

    return (
      <React.Fragment>
        
        <div>
        <h1> Give Feedback</h1>

          <button onClick={handleGoodClick}>good</button>
          <button onClick={handleNeutralClick}>neutral</button>
          <button onClick={handleBadClick}>bad</button>

          <h1> Statistics</h1>
        </div>
        
        
        
        <table>
        
        <Stats Good={Good} Bad={Bad} Neutral={Neutral} />
        
        </table>
        
        
      </React.Fragment>
      
      
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
