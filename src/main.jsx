import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from "./routes/index.jsx";
import './index.css'
import { RouterProvider } from "react-router-dom"
import JobProvider from "./api/JobProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobProvider>
      <RouterProvider router={routes} />
    </JobProvider>
  </React.StrictMode>,
)
