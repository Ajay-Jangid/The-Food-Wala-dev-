import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="h-screen">
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err.status} : {err.statusText}</h3>
            <p>{err.error.stack}</p>
        </div>
    )
}

export default Error;