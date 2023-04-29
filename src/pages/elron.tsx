import * as React from "react";
import { TypeAnimation } from 'react-type-animation';


const TrainTimeGetter = () => {
    const [saueTallinn, setSaueTallinn] = React.useState();
    const [tallinnSaue, setTallinnSaue] = React.useState();
    let todayDate = new Date().toISOString().slice(0, 10);

    React.useEffect(() => {
        const dataFetch = async () => {
            // waiting for allthethings in parallel
            const result = (
                await Promise.all([
                    fetch(
                        "https://api.ridango.com/v2/64/intercity/stopareas/trips/direct",
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "date": todayDate,
                                "origin_stop_area_id": "64-5847-87",
                                "destination_stop_area_id": "64-5847-93",
                                "channel": "web"
                            })
                        }
                    ),
                    fetch(
                        "https://api.ridango.com/v2/64/intercity/stopareas/trips/direct",
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "date": todayDate,
                                "origin_stop_area_id": "64-5847-93",
                                "destination_stop_area_id": "64-5847-87",
                                "channel": "web"
                            })
                        }
                    )
                ])
            ).map((r) => r.json());

            // and waiting a bit more - fetch API is cumbersome
            const [saueTallinn, tallinnSaue] = await Promise.all(
                result
            );

            // when the data is ready, save it to state
            setSaueTallinn(saueTallinn);
            setTallinnSaue(tallinnSaue);
        };

        dataFetch();
    }, []);

    return {saueTallinn, tallinnSaue};
};

const App = () => {

    const { saueTallinn, tallinnSaue } = TrainTimeGetter()

    const Train = (props: { label: string }) => {
        if (!saueTallinn || !tallinnSaue) return (
            <div className={"mt-20 text-center"}>
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
            return (
                <div className={"mt-20 text-center"}>
                    <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">{props.label}</h1>
                </div>
            );
        };
    }

    return (
        <main className={"w-screen sm:h-screen bg-neutral-900"}>
            <title>Time...</title>
            <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Just a modicum of time...</h1>
            <div className={"justify-evenly sm:flex text-center"}>
                <div>
                    <Train label={"Saue → Tallinn"} />
                </div>
                <div>
                    <Train label={"Tallinn → Saue"} />
                </div>
            </div>
        </main>
    )
}

export default App
