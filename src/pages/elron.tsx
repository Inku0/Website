import * as React from "react";
import ky from 'ky';

const ElronPage = () => {
    const getData = async () => {
        const json = await ky.post('https://example.com', {json: {foo: true}}).json();
        console.log(json);
    }

    const Train = () => {
        getData()
        return (
            <div className={"mt-20 text-center"}>
                <p>hi</p>
            </div>
        );
    }

    return (
        <main className={"w-screen sm:h-screen bg-neutral-900"}>
            <title>Time...</title>
            <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Time | Time | Time</h1>
            <div className={"justify-evenly flex text-center"}>
                <div>
                    <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Saue → Tallinn</h1>
                    <Train />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Tallinn → Saue</h1>
                    <p className={"text-slate-100 mt-10 rounded w-32 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"}>test</p>
                </div>
            </div>
        </main>
    )
}

export default ElronPage
