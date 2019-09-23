import React,{useState, useEffect} from 'react';
import './CountingClock.css';

const CountingClock = ({time})=>{
    const [days, setDays] = useState(time.dd);
    const [hours, setHours] = useState(time.hh);
    const [minutes, setMinutes] = useState(time.mm);
    const [seconds, setSeconds] = useState(time.ss);

    const _onStickCLock=()=>{
        setTimeout(()=>{ //Start the timer
            if(days<0){
                setSeconds(0)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
                return null;
            }
            if(seconds-1<0){
                setSeconds(59);
                if(minutes-1<0){
                    setMinutes(59);
                    if (hours-1<0){
                        setHours(23);
                        setDays(days-1);
                    }
                    else{
                        setHours(hours-1);
                    }
                }
                else{
                    setMinutes(minutes-1)
                }
            }else{
            setSeconds(seconds-1)
            } //After 1 second, set render to true
        }, 1000)
    }

    useEffect(() => {
        _onStickCLock();
        return (()=>{  
            
        })
      },  [days, minutes,seconds, hours]);

        return(
    <div id='timer'>
        <div className='time' id='days'> {days < 10? '0'+days.toString(): days} <span> DAYS</span></div>
        <div className='time' id='hours'>{hours < 10? '0'+hours.toString(): hours}<span> HOURS</span></div>
        <div className='time' id='minutes'>{minutes < 10? '0'+minutes.toString(): minutes} <span> MINUTES</span></div>
        <div className='time' id='seconds'>{seconds < 10? '0'+seconds.toString(): seconds} <span> SECONDS</span></div>
    </div>
    )
}
export default CountingClock;