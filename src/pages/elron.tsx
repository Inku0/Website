import * as React from "react"

const ElronPage = () => {

    const [postId, setPostId] = React.useState();

    React.useEffect(() => {
        // PUT request using fetch with set headers
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    }, []);

    React.useEffect(() => {
        console.log(postId);
    }, []);

    return (
        <main className={"w-screen h-screen bg-neutral-900"}>
            <title>Ingvar Ruulib!</title>
            <h1 className="text-5xl font-bold text-emerald-500 text-center pt-5">Millist tööriista soovite kasutada?</h1>
            <div className={"justify-evenly flex text-center"}>
                <a className={"text-slate-100 mt-60 rounded w-32 sm:w-96 text-center leading-6 bg-neutral-300 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10 "} href={"kellad"}>Kellad</a>
                <a className={"text-slate-100 mt-60 rounded w-32 sm:w-96 text-center leading-6 bg-neutral-300 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10"} href={'https://wolfreealpha.on.fleek.co/input/index.html'}>Wolfree</a>
            </div>
        </main>
    )
}

export default ElronPage
