const Button = (props: { link: string, text: string }) => {
    return (
        <a
            href={props.link}
            className="text-slate-100 lg:mt-30 mt-32 rounded w-60 sm:w-96 text-center leading-6 text-2xl bg-emerald-500 space-x-4 p-4 sm:p-10">
            {props.text}
        </a>
    )
}

export default Button;
