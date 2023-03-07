import Details from "./Detail";

import { Link } from "react-router-dom";

export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    const alert = () => {
        window.alert('hello world');
    };

    return <div className="max-w-full text-center">
        <div>{heading}</div>
        <button className="bg-green-500 p-5" onClick={alert}>Click me</button>
        <br />

        <button>
            <Link to='/details' title="Go To Details Page">Go to details</Link>
        </button>

    </div>;
}