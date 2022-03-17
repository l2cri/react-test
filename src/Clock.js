import React, {useEffect, useState} from "react";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timerID);
        }
    })
    return <h2>Сейчас {date.toLocaleTimeString()}</h2>
}

export default Clock;