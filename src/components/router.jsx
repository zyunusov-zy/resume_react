import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Overview from "./Overiew.jsx";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "overview",
                element: <Overview />
            },
        ]
    }
])

export default routes;