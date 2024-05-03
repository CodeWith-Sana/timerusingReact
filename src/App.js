
import { useState ,useEffect} from 'react';
import './App.css';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const[duration , setDuration] = useState(2*60)
  const[timeLeft ,setTimeLeft]= useState(duration)
  const[timeRunning , setTimeRunning] = useState(false)
  useEffect( () =>
      {
        let timer;
        if(timeRunning && timeLeft>0){
          timer = setInterval(() =>{ 
            setTimeLeft((preTimeleft) => preTimeleft-1  );
          } ,1000
        )
        }
        else if(timer ==0){
          if(duration==2*60){
          setDuration(2*60)
          }
          setTimeLeft(duration)
        }
        return() => clearInterval(timer)
      },[timeRunning , timeLeft , duration])
      const  startTimer = () =>{
        setTimeRunning(true)
      }
      const pause= () =>{
          setTimeRunning(false)
      }
      const Reset =() =>
      {
          setTimeRunning(false)
          setTimeLeft(duration)
      };

    const formatTime= (timeInseconds)=>{
      const minutes = Math.floor(timeInseconds /60);
      const second = timeInseconds % 60;
      return` ${minutes.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')} `

    };
  
      return(
        <div className='App'>
          <h1>Timer</h1>
          <div className='timer'>{formatTime(timeLeft)}</div>
          <div className='Controls'>
            {!timeRunning ?(
             <button onClick={startTimer}>Start</button>):(
              <button onClick={pause}>Pause</button>
             )
        
}
            {/* <button onClick={startTimer}>Start</button> */}
           
            <button onClick={Reset}>Reset</button>
          </div>
        </div>
  );
}

export default App;
