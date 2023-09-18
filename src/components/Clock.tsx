import * as React from "react";
import Countdown from "react-countdown";


const Clock = (props: { label: string, date: Date }) => {
    return (
        <div className={"mt-20 text-center"}>
            <p className={"text-slate-100 text-center text-4xl mb-2"}>{props.label}</p>
            <Countdown className={"inline-block p-10 text-center border-2 border-emerald-500 p-10 w-72 rounded text-slate-100 text-4xl"} date={props.date} />
        </div>
    );
}

export default Clock