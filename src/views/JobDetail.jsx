import { useLocation } from "react-router-dom";

const JobDetail = () => {
    const location = useLocation()
    const jobDetail = location.state
    const handleBack = () => {
        history.back()
    }
    return (
        <>
            <div className="container mx-auto">
                <button
                    onClick={handleBack}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-5"
                >
                    Back
                </button>
                <h1 className="text-center font-medium uppercase text-4xl pt-6 pb-8">
                    Job Detail
                </h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">{jobDetail.title}</h2>
                    <p className="text-gray-700 mb-6">{jobDetail.description}</p>
                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-lg font-semibold mb-4">Requirements:</h3>
                        <ul className="list-disc pl-6">
                            {jobDetail.requirements.map((requirement, index) => (
                                <li key={index} className="mb-2">
                                    {requirement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobDetail
