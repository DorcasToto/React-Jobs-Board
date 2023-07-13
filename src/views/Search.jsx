import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Search = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const searchJob = (event) => {
        setSearchTerm(event.target.value)
        handleSearch(searchTerm)
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="w-64 mx-auto mb-6">
                    <input
                        onChange={searchJob}
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </>
    )
}
export default Search
