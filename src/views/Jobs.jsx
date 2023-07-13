import { JobDataContext } from "../api/JobProvider.jsx"
import {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
const Job = () => {
    const { jobs } = useContext(JobDataContext)
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTermm, setSearchTerm] = useState([]);
    useEffect(() => {
        setFilteredJobs(jobs)
    }, [jobs])
    const handleSearch = (searchTerm) => {
        console.log("search", searchTerm)
        setSearchTerm(searchTerm)
        const filteredData = jobs.filter((job => job.title.toLowerCase().includes(searchTermm.toLowerCase())))
        setFilteredJobs(filteredData)
    }
    return (
        <>
            {searchTermm}
            <h1 className="text-center font-medium uppercase text-4xl pt-6 pb-6">Open Jobs</h1>
            <Search handleSearch={handleSearch} />
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredJobs.map((job) => {
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
