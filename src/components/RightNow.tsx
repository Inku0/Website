import {useState, useEffect} from "react";

const RightNow = () => {
    const [_, setDate] = useState(new Date());
    useEffect(() => {
        const timerID: number = setInterval( () => tick(), 1000 );
        return function cleanup(): void {
            clearInterval(timerID);
        };
    });

    const tick = (): void => {
        setDate(new Date());
    };
    return (
        <div className={"mt-20 text-center"}>
            <p className={"text-slate-100 text-center text-4xl mb-2"}>Right now!</p>
            <span className={"inline-block p-10 text-center border-2 border-emerald-500 w-72 rounded text-slate-100 text-4xl"}>{new Date().toLocaleTimeString('en-GB')}</span>
        </div>
    );
}

export default RightNow