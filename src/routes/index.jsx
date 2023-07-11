import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const routes = createBrowserRouter([
    {
        path: '/api',
        element: <App />
    },
])
export default routes
