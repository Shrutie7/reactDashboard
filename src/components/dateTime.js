import React ,{ useState , useEffect } from 'react'


export const DateTime=()=>{
    var [date,setDate] = useState(new Date());

    useEffect(()=>{
        var timer = setInterval(()=>setDate(new Date()),1000)
        return function cleanup(){
            clearInterval(timer)
        }
    });

    return (
        <div >
            <p id ="b">{date.toLocaleDateString()}</p>
            <p id="a">{date.toLocaleTimeString()}</p>
            
        </div>
        

    )
}
export default DateTime