import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> OOPS!!! </h1>
            <h2> Something Zent Zong !!!</h2>
            <h3>{err.status}</h3>
        </div>
    );
}

export default Error;