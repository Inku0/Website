import * as React from "react"

const IndexPage = () => {
  return (
    <main className={"w-screen h-screen bg-neutral-900"}>
      <title>Ingvar Ruulib!</title>
      <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Millist tööriista soovite kasutada?</h1>
      <div className={"justify-evenly flex text-center"}>
        <a className={"text-slate-100 mt-60 rounded-lg w-96 text-center leading-6 bg-neutral-300 text-2xl bg-emerald-500 space-x-4 p-10 "} href={"kellad"}>Kellad</a>
        <a className={"text-slate-100 mt-60 rounded-lg w-96 text-center leading-6 bg-neutral-300 text-2xl bg-emerald-500 space-x-4 p-10"} href={'https://wolfreealpha.on.fleek.co/input/index.html'}>Wolfree</a>
      </div>
    </main>
  )
}

export default IndexPage
