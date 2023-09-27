import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center space-y-3">
                {
                    error.status === 404 && <p className="text-5xl md:text-8xl font-bold text-red-600">404</p>
                }
                <p className="text-2xl md:text-3xl font-bold">{error.statusText || error.message}</p>
                <Link to={"/"}><button className="py-3 px-8 text-white bg-[#FF444A] font-semibold">Go Back To Home</button></Link>

            </div>
        </>

    );
};

export default ErrorPage;