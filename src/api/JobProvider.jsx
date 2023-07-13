import {useEffect, useState, createContext} from "react";
import jobData from "../data.json"

export const JobDataContext = createContext()

// eslint-disable-next-line react/prop-types
const JobProvider = ({children}) => {
    const [jobs, setJobs] = useState([])
    const getJobs = () => {
        setJobs(jobData)
    }
    useEffect(() => {
        getJobs()
    }, [])
    return (
            <JobDataContext.Provider value={{jobs}}>
                {children}
            </JobDataContext.Provider>
    )
}

export default JobProvider
