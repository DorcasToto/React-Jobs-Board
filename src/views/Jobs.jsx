import { JobDataContext } from "../api/JobProvider.jsx"
import { useContext } from "react";
import { Link } from "react-router-dom";
const Job = () => {
    const { jobs } = useContext(JobDataContext)
    return (
        <>
            <h1 className="text-center font-medium uppercase text-4xl pt-6 pb-6">Open Jobs</h1>
            <div className="container mx-auto">
                <div className="w-64 mx-auto mb-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {jobs.map((job) => {
                    return (
                        <div key={job.id} className="bg-white shadow-lg rounded-lg p-6 m-4">
                            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                            <p className="text-gray-700">{job.location}</p>
                            <Link to={`/job/${job.id}`} className="text-blue-300" state={job}>Read more</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Job
