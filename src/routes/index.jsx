import { createBrowserRouter } from "react-router-dom";
import Job from "../views/Jobs.jsx";
import JobDetail from "../views/JobDetail.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Job />
    },
    {
        path: '/job/:id',
        element: <JobDetail />
    },
])
export default routes
