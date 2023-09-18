import * as React from "react";

const Trains = () => {
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
            console.log(saueTallinn)
        };

        dataFetch();
    }, []);
    return {saueTallinn, tallinnSaue};
}

export default Trains;
