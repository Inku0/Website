import Trains from "./Trains.tsx";
import { TypeAnimation } from 'react-type-animation';

const App = () => {

    const { saueTallinn, tallinnSaue } = Trains()

    const Train = (props: { label: string, which: any }) => {
        if (!props.which) return (
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
            const trainTimesArray: Array<any> = []
            const Train = function (this: any, departureTime: Date, arrivalTime: Date, replacements: Array<any>, tripMessages: Array<any>, id: number): void {
                this.departureTime = departureTime;
                this.arrivalTime = arrivalTime;
                this.replacements = replacements;
                this.tripMessages = tripMessages;
                this.id = id
            };
            // add smth for replacement / trip messages
            for (let i: number = 0; i < props.which.journeys.length; i++) {
                trainTimesArray.push(new Train(props.which.journeys[i].trips[0].departure_time, props.which.journeys[i].trips[0].arrival_time, props.which.journeys[i].trips[0].replacements, props.which.journeys[i].trips[0].trip_messages, props.which.journeys[i].trips[0].id))
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