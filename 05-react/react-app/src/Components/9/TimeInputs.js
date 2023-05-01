import React, { useState } from 'react';

function TimeInputs() {
    const [seconds, setSeconds] = useState(0)
    const minutes = seconds / 60;
    const hours = minutes / 60;

    const onChange = ({target: {name, value}}) => {
        switch(name){
            case "seconds":
                return setSeconds(value);
            case "minutes":
                return setSeconds(value * 60); // convert from minutes to seconds
            case "hours":
                return setSeconds(value * 60 * 60); //convert from hours to seconds
            default:
                break;
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <label> Seconds
                <input type="number" name="seconds" value={seconds} onChange={onChange}/>
            </label>
            <label> Minutes
                <input type="number" name="minutes" value={minutes} onChange={onChange}/>
            </label>
            <label> Hours
                <input type="number" name="hours" value={hours} onChange={onChange}/>
            </label>
        </div>
    );
}

export default TimeInputs;