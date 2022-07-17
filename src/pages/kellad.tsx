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

    const Clock = (props: { label: string, date: any }) => {
        return (
            <div className={"mt-8"}>
                <p className={"text-slate-100 text-center text-2xl mb-2"}>{props.label}</p>
                <Countdown className={"inline-block text-center border-2 border-emerald-500 p-2 w-28 rounded-sm text-slate-100"} date={props.date} />
            </div>
        );
    }

    const currentYear = new Date().getFullYear();
    return (
        <main className={"w-screen h-screen bg-neutral-900 "}>
            <title>Kellad</title>
            <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Kellad</h1>
            <div className={"flex justify-evenly"}>
                <div className={"mt-8"}>
                    <p className={"text-slate-100 text-center text-2xl mb-2"}>Praegu</p>
                    <span className={"inline-block text-center border-2 border-emerald-500 p-2 w-28 rounded-sm text-slate-100"}>{new Date().toLocaleTimeString('en-GB')}</span>
                </div>
                <Clock label={"Koolini"} date={`${currentYear}-09-01T12:00:00`} />
                <Clock label={"Suveni"} date={`${currentYear + 1}-06-06T12:00:00`} />
            </div>
        </main>
    )
}

export default IndexPage
