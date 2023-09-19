import DataFetch from "./Trains.tsx";
import { TypeAnimation } from 'react-type-animation';
import {useState} from "react";

const App = () => {
    const [saueTallinn, setSaueTallinn] = useState(null);
    const [tallinnSaue, setTallinnSaue] = useState(null);

    type TrainType = {
        departureTime: string;
        arrivalTime: string;
        replacements: Array<any>;
        tripMessages: Array<any>;
        id: number;
    }
    if (
        sessionStorage.getItem("saueTallinn") == "undefined" ||
        typeof sessionStorage.getItem("saueTallinn") == "object" &&
        sessionStorage.getItem("tallinnSaue") == "undefined" ||
        typeof sessionStorage.getItem("tallinnSaue") == "object"
    ) {
        DataFetch().then(r => {
            setSaueTallinn(JSON.parse(sessionStorage.getItem("saueTallinn")))
            setTallinnSaue(JSON.parse(sessionStorage.getItem("tallinnSaue")))
        });
    } else if (saueTallinn == null && tallinnSaue == null) {
        setSaueTallinn(JSON.parse(sessionStorage.getItem("saueTallinn")))
        setTallinnSaue(JSON.parse(sessionStorage.getItem("tallinnSaue")))
    }
    const Train = (props: { label: string, which: any }) => {
        if (saueTallinn == null && tallinnSaue == null) return (
            <div className={"mt-10 text-center"}>
                <TypeAnimation
                    className="text-5xl font-bold text-emerald-500 text-center pt-5"
                    sequence={[
                        'patience',
                        1000,
                    ]}
                    speed={50}
                    cursor={false}
                    repeat={0}
                />
                <TypeAnimation
                    className="text-5xl font-bold text-emerald-500 text-center pt-5"
                    sequence={[
                        '', 1000, '.', 1000, '..', 1000, '...', 1000, '....', 1000, '.....', 1000, '......', 1000, '.......', 1000,
                    ]}
                    cursor={false}
                    repeat={Infinity}
                />
            </div>
        );
        else {
            const trainTimesArray: Array<TrainType> = []
            const Train = function (this: any, departureTime: Date, arrivalTime: Date, replacements: Array<any>, tripMessages: Array<any>, id: number): void {
                this.departureTime = departureTime;
                this.arrivalTime = arrivalTime;
                this.replacements = replacements;
                this.tripMessages = tripMessages;
                this.id = id
            };
            // add smth for replacement / trip messages
            for (let i: number = 0; i < props.which["journeys"].length; i++) {
                const train: TrainType = {
                    departureTime: props.which["journeys"][i]["trips"][0]["departure_time"],
                      arrivalTime: props.which["journeys"][i]["trips"][0]["arrival_time"],
                     replacements: props.which["journeys"][i]["trips"][0]["replacements"],
                     tripMessages: props.which["journeys"][i]["trips"][0]["trip_messages"],
                    id: props.which.journeys[i].trips[0].id,
                };
                trainTimesArray.push(train);
            }
            const listItems = (trainTimesArray.map((train) => <li key={train.departureTime}>{train.departureTime.substring(11,16) + " → " + train.arrivalTime.substring(11,16) }</li>));
            return (
                <div className={"mt-10 text-center"}>
                    <h1 className="text-5xl font-bold text-emerald-500 text-center pt-2">{Array.isArray(props.which.disruption_messages) && props.which.disruption_messages.length ? "DISRUPTION DETECTED!" : null}</h1>
                    <h1 className="text-5xl font-bold text-emerald-500 text-center pt-2">{props.label}</h1>
                    <div>
                        <ol className="text-2xl text-emerald-500 text-center pt-5">
                            { listItems }
                        </ol>
                    </div>
                </div>
            );
        }
    };

    return (
        <main className={"w-screen h-screen block overflow-auto bg-neutral-900"}>
            <title>Time...</title>
            <h1 className="text-3xl font-bold text-emerald-500 text-center pt-10">kuupäiv om: {new Date().toISOString().slice(0, 10)}</h1>
            <div className={"justify-evenly sm:flex text-center"}>
                <div>
                    <Train label={"Saue → Tallinn"} which={saueTallinn}/>
                    <br />
                </div>
                <div>
                    <Train label={"Tallinn → Saue"} which={tallinnSaue}/>
                    <br />
                </div>
            </div>
        </main>
    );
};

export default App