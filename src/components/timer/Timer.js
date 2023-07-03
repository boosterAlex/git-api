import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.seconds);

    useEffect(() => {
        setSeconds(props.seconds);
    }, [props.seconds]);

    useEffect(() => {
        props.onChange(seconds);
    }, [seconds]);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [props.timerKey]);

    return <div>{props.seconds}</div>;
};

export default Timer;
