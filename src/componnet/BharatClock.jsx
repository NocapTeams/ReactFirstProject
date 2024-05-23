import { useEffect, useState } from "react";

const BharatClock= ()=>{
const [time, setTime] = useState(new Date());
useEffect(()=>{
   
    const intervalID = setInterval(()=>{
        setTime(new Date());
    },1000);

    return ()=>{
        clearInterval(intervalID);
        
    }
});


return <>
<center>
<h1 className="clock">
    This is the current time :{time.toLocaleDateString()} --{" "} {time.toLocaleTimeString()}
</h1>
</center>
</>
}

export default BharatClock;