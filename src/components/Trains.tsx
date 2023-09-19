import {useState} from "react";

    const DataFetch = async () => {
        let todayDate = new Date().toISOString().slice(0, 10);
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
                    }),
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
                    })
            ])
        ).map((r) => r.json());
        // and waiting a bit more - fetch API is cumbersome
        const [saueTallinnResult, tallinnSaueResult] = await Promise.all(
            result
        );
        // when the data is ready, save it to state
        sessionStorage.setItem("saueTallinn", JSON.stringify(saueTallinnResult))
        sessionStorage.setItem("tallinnSaue", JSON.stringify(tallinnSaueResult))
        return {saueTallinnResult, tallinnSaueResult};
    };

export default DataFetch;