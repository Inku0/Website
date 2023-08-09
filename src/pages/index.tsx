import * as React from "react";

const IndexPage = () => {
  return (
    <main className={"w-screen lg:h-screen bg-neutral-900"}>
      <title>Inku ruulib!</title>
      <h1 className="text-7xl font-bold text-emerald-500 text-center pt-20">Wazzup, brochacho?</h1>
      <div className={"justify-evenly flex text-center lg:flex-row flex-col items-center"}>
        <a className={"text-slate-100 lg:mt-60 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"} href={"kellad"}>Kellad</a>
        <a className={"text-slate-100 lg:mt-60 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"} href={'https://wolfreealpha.on.fleek.co/input/index.html'}>Wolfree</a>
        <a className={"text-slate-100 lg:mt-60 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"} href={"elron"}>Rongikesed</a>
      </div>
    </main>
  )
}

export default IndexPage
