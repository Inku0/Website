import * as React from "react";

const IndexPage = () => {
    return (
        <main className={"w-screen lg:h-screen bg-neutral-900"}>
            <title>Inku ruulib!</title>
            <h1 className="text-7xl font-bold text-emerald-500 text-center pt-20">Wazzup, brochacho?</h1>
            <div className={"justify-evenly flex text-center lg:flex-row flex-col items-center bg-neutral-900 flex-wrap"}>
                <a href={"kellad"}                                              className={"text-slate-100 lg:mt-60 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"}>Kellad</a>
                <a href={"https://wolfreealpha.on.fleek.co/input/index.html"}   className={"text-slate-100 lg:mt-60 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"}>Wolfree</a>
                <a href={"elron"}                                               className={"text-slate-100 lg:mt-60 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"}>Rongikesed</a>
                <div className={"lg:block lg:basis-full lg:h-0 hidden"}></div>
                <a href={"https://jellyfin.ingvarruulib.com/web/#!/home.html"}  className={"text-slate-100 lg:mt-40 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"}>Visuaalne meedia</a>
                <a href={"https://navidrome.ingvarruulib.com/app/#/login"}      className={"text-slate-100 lg:mt-40 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"}>Auraalne meedia</a>
            </div>
        </main>
    )
}

export default IndexPage
