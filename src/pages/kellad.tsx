import * as React from "react";
import Countdown from "react-countdown";

const IndexPage = () => {
    const [date, setDate] = React.useState(new Date());
    React.useEffect(() => {
        const timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        setDate(new Date());
    };
    const currentYear = new Date().getFullYear();
    return (
        <main className={"w-screen h-screen bg-neutral-900 "}>
            <title>Kellad</title>
            <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Kellad</h1>
            <span className={"inline-block border rounded-sm text-slate-100"}>{new Date().toLocaleTimeString('en-GB')}</span>
            <br />
            <Countdown className={"inline-block border-2 p-2 w-28 rounded-sm text-slate-100"} date={`${currentYear}-09-01T12:00:00`} />
            <br />
            <Countdown className={"inline-block border rounded-sm text-slate-100 "} date={`${currentYear + 1}-06-06T12:00:00`} />
        </main>
    )
}

export default IndexPage
