import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Overview from "./Overiew.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "overview",
                element: <Overview />
            },
            {
                path:"skills",
                element: <Skills />
            },
            {
                path:"education",
                element: <Education />
            }
        ]
    }
])

export default routes;