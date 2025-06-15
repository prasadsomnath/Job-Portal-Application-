import React, { useEffect, useState } from 'react';
import { getAllJobs, deleteJob, searchJob } from '../api/jobService';
import AddJobForm from './AddJobform';
import './JobDashboard.css';
 import 'bootstrap/dist/css/bootstrap.min.css'; // Uncomment if you want to use Bootstrap for styling
function JobDashboard() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const response = await getAllJobs();
    setJobs(response.data);
  };

  const handleDelete = async (id) => {
    console.log("Attempting to delete job with ID:", id);
    try {
      await deleteJob(id);
      alert("Job deleted successfully");
      loadJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Failed to delete job: " + (error.response?.data || error.message));
    }
  };

  const handleSearch = async () => {
  if (!searchTerm.trim()) {
    loadJobs();
    return;
  }
  if (searchTerm.length < 3) {
    alert("Please enter at least 3 characters to search.");
    return;
  } 
  const response = await searchJob(searchTerm);
  setJobs(response.data);
  setSearchTerm(''); // Clear input after search
};


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Job Portal Dashboard</h2>

      <div className="input-group mb-4 search-bar">
        <input
  type="text"
  className="form-control"
  placeholder="Search job by keyword..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') handleSearch();
  }}
   />

      </div>

      <div>
        <button className="btn btn-success mb-3 me-2" onClick={loadJobs}>Refresh Jobs</button>
      </div>

      {/* Job form section */}
      {/* <AddJobForm onJobAdded={loadJobs} /> */}
<div>
  <button className="btn btn-primary mb-3" onClick={() => setShowForm(!showForm)}>
    {showForm ? 'Close Form' : 'Add Job'}
  </button>
  {showForm && <AddJobForm onJobAdded={loadJobs} />}
</div>

      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-6 mb-4" key={job.postId}>
            <div className="card shadow-sm job-card">
              <div className="card-body">
                <h5 className="card-title" id="one">{job.postProfile}</h5>
                <p className="card-text">{job.postDesc}</p>
                <p><strong>Experience:</strong> {job.reqExperience}</p>
                <p><strong>Tech Stack:</strong></p>
                <ul className="list-group-list-group-flush" id="root" >
                  {job.postTechStack.map((tech, index) => (
                    <li key={index} className="list-group-item">{tech}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => handleDelete(job.postId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobDashboard;
