const fetchData = async (originId: string, destinationId: string) => {
    const todayDate = new Date().toISOString().slice(0, 10);
    const response = await fetch("https://api.ridango.com/v2/64/intercity/stopareas/trips/direct", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "date": todayDate,
            "origin_stop_area_id": originId,
            "destination_stop_area_id": destinationId,
            "channel": "web"
        })
    });
    return response.json();
};

const DataFetch = async () => {
    const [saueTallinnResult, tallinnSaueResult] = await Promise.all([
        fetchData("64-5847-87", "64-5847-93"),
        fetchData("64-5847-93", "64-5847-87")
    ]);

    sessionStorage.setItem("saueTallinn", JSON.stringify(saueTallinnResult));
    sessionStorage.setItem("tallinnSaue", JSON.stringify(tallinnSaueResult));

    return { saueTallinnResult, tallinnSaueResult };
};

export default DataFetch;