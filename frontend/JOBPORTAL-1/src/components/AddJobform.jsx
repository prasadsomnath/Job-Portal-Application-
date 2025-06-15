import React, { useState } from 'react';
import { addJob } from '../api/jobService';
// Importing custom CSS for styling
import './AddJobform.css'; // Ensure this file exists for custom styles
function AddJobForm({ onJobAdded }) {
  const [formData, setFormData] = useState({
    postId: '',
    postProfile: '',
    postDesc: '',
    reqExperience: '',
    postTechStack: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      postTechStack: formData.postTechStack.split(',').map(s => s.trim())
    };

    try {
      await addJob(jobData);
      alert('Job added successfully!');
      setFormData({
        postId: '',
        postProfile: '',
        postDesc: '',
        reqExperience: '',
        postTechStack: ''
      });
      onJobAdded(); // reload jobs
    } catch (error) {
      alert('Failed to add job: ' + error.message);
    }
  };

  return (
    <div className="card p-4 mb-5" id="addJobForm">
      <h4 className="mb-3">Add New Job</h4>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
            <label>Job postId</label>
          <input
            type="text"
            className="form-control"
            name="postId"
            value={formData.postId}
            onChange={handleChange}
            required
          />
          <label>Job Profile</label>
          <input
            type="text"
            className="form-control"
            name="postProfile"
            value={formData.postProfile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="postDesc"
            value={formData.postDesc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Required Experience</label>
          <input
            type="text"
            className="form-control"
            name="reqExperience"
            value={formData.reqExperience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Tech Stack (comma separated)</label>
          <input
            type="text"
            className="form-control"
            name="postTechStack"
            value={formData.postTechStack}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Job</button>
      </form>
    </div>
  );
}

export default AddJobForm;
