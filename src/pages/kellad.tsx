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
            <div className={"mt-20 text-center"}>
                <p className={"text-slate-100 text-center text-4xl mb-2"}>{props.label}</p>
                <Countdown className={"inline-block text-center border-2 border-emerald-500 p-2 w-52 rounded-sm text-slate-100 text-3xl"} date={props.date} />
            </div>
        );
    }

    const currentYear = new Date().getFullYear();
    return (
        <main className={"w-screen sm:h-screen bg-neutral-900 "}>
            <title>Kellad</title>
            <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Kellad</h1>
            <div className={"sm:flex sm:justify-evenly sm:flex-wrap"}>
                <div className={"mt-20 text-center"}>
                    <p className={"text-slate-100 text-center text-4xl mb-2"}>Praegu</p>
                    <span className={"inline-block text-center border-2 border-emerald-500 p-2 w-52 rounded-sm text-slate-100 text-3xl"}>{new Date().toLocaleTimeString('en-GB')}</span>
                </div>
                <Clock label={"Koolini"} date={`${currentYear}-09-01T12:00:00`} />
                <Clock label={"Suveni"} date={`${currentYear + 1}-06-06T12:00:00`} />
                <div className={"basis-full h-0"}></div>
                <Clock label={"I vaheaeg"} date={`${currentYear}-10-22T00:00:00`} />
                <Clock label={"II vaheaeg"} date={`${currentYear}-10-22T00:00:00`} />
                <Clock label={"III vaheaeg"} date={`${currentYear}-10-22T00:00:00`} />
                <div className={"basis-full h-0"}></div>
                <Clock label={"IV vaheaeg"} date={`${currentYear}-10-22T00:00:00`} />
            </div>
        </main>
    )
}

export default IndexPage
