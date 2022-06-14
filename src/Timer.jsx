// import React,{useState, useEffect} from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const Timer = () => {
//     const [countdownDate, setCountdownDate] = useState(new Date('06/09/2022').getTime());
//   const [state, setState] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
// console.log("countdown", countdownDate)
//   useEffect(() => {
//     setInterval(() => setNewTime(), 1000);
//   }, []);

//   const setNewTime = () => {
//     if (countdownDate) {
//       const currentTime = new Date().getTime();

//       const distanceToDate = countdownDate - currentTime;

//       let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
//       let hours = Math.floor(
//         (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//       );
//       let minutes = Math.floor(
//         (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
//       );
//       let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

//       const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//       days = `${days}`;
//       if (numbersToAddZeroTo.includes(hours)) {
//         hours = `0${hours}`;
//       } else if (numbersToAddZeroTo.includes(minutes)) {
//         minutes = `0${minutes}`;
//       } else if (numbersToAddZeroTo.includes(seconds)) {
//         seconds = `0${seconds}`;
//       }

//       setState({ days: days, hours: hours, minutes, seconds });
//     }
//   };
//     return (
//         <>
//             <Container>
//                 <Row>
//                     <Col lg={12} className="mt-5">
//                         <div>
//                             <header className="header">
//                                 <h1 className="title">React Hooks Countdown</h1>
//                             </header>
//                             <h3 className="subtitle">A simple countdown to demonstrate, well, a countdown using the useEffect() and useState() hooks in React.</h3>
//                             <div className='countdown-wrapper' style={{display:"flex", gap:"30px"}}>
//                                 <div className='time-section'>
//                                     <div className='time'>{state.days || '0'}</div>
//                                     <small className="time-text">Days</small>
//                                 </div>
//                                 <div className='time-section'>
//                                     <div className='time'>:</div>
//                                 </div>
//                                 <div className='time-section'>
//                                     <div className='time'>{state.hours || '00'}</div>
//                                     <small className="time-text">Hours</small>
//                                 </div>
//                                 <div className='time-section'>
//                                     <div className='time'>:</div>
//                                 </div>
//                                 <div className='time-section'>
//                                     <div className='time'>{state.minutes || '00'}</div>
//                                     <small className="time-text">Minutes</small>
//                                 </div>
//                                 <div className='time-section'>
//                                     <div className='time'>:</div>
//                                 </div>
//                                 <div className='time-section'>
//                                     <div className='time'>{state.seconds || '00'}</div>
//                                     <small className="time-text">Seconds</small>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }



// export default Timer;

import React,{useState, useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Timer = (props) => {
   const [timerDays, setTimerDays] = useState("00")
   const [timerHours, setTimerHours] = useState("00")
   const [timerMinutes, setTimerMinutes] = useState("00")
   const [timerSeconds, setTimerSeconds] = useState("00")

   let interval = useRef();

   const startTimer = ()=>{
     const countdownDate = new Date(props.currentTime).getTime();
     interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance  = countdownDate - now;

      const days = Math.floor(distance/ (1000*60*60*24));
      const hours = Math.floor((distance% (1000*60*60*24)/(1000*60*60)));
      const minutes = Math.floor((distance% (1000*60*60))/(1000*60));
      const seconds = Math.floor((distance% (1000*60))/1000);

      if(distance<0){
        clearInterval(interval.current);
        document.getElementById("message").style.display = "block";
        document.getElementById("timer").style.display = "none";
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        document.getElementById("message").style.display = "none";
      }

     },1000)
   }

   useEffect(()=>{
     startTimer();
     return()=>{
      clearInterval(interval.current);
     }
   })
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="mt-2">
                        <div>
                         <div id='message' style={{display:"none"}}>Expired</div>
                            <div className='countdown-wrapper' style={{display:"flex", gap:"5px"}} id="timer">
                                <div className='time-section'>
                                    <div className='time'>{timerDays}<span className="time-text">&nbsp;Days</span></div>
                                    
                                </div>
                                <div className='time-section'>
                                    <div className='time'>:</div>
                                </div>
                                <div className='time-section'>
                                    <div className='time'>{timerHours}<span className="time-text">&nbsp;Hours</span></div>
                                    
                                </div>
                                <div className='time-section'>
                                    <div className='time'>:</div>
                                </div>
                                <div className='time-section'>
                                    <div className='time'>{timerMinutes}<span className="time-text">&nbsp;Minutes</span></div>
                                    
                                </div>
                                <div className='time-section'>
                                    <div className='time'>:</div>
                                </div>
                                <div className='time-section'>
                                    <div className='time'>{timerSeconds}<span className="time-text">&nbsp;Seconds</span></div>
                                    
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default Timer;
 {/* <Timer currentTime={"june 14 2022 03:02 pm"} /> */}