"use client";

import "./jobs.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

export default function JobsPage() {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: "Frontend Developer", company: "Google", location: "Remote" },
    { id: 2, title: "Backend Developer", company: "Amazon", location: "Bangalore" },
    { id: 3, title: "Full Stack Developer", company: "Microsoft", location: "Hyderabad" }
  ]);

  const [form, setForm] = useState({
    id: "",
    title: "",
    company: "",
    location: ""
  });

  const addJob = () => {
    if (!form.id || !form.title || !form.company || !form.location) {
      alert("Please fill all fields");
      return;
    }

    setJobs([
      ...jobs,
      {
        id: Number(form.id),
        title: form.title,
        company: form.company,
        location: form.location
      }
    ]);

    setForm({ id: "", title: "", company: "", location: "" });
  };

  const deleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="page-container">

      {/* HEADER */}
      <div className="topbar">
        <div>
          <h1>💼 Job Management</h1>
          <p className="subtitle">Create, manage and track job listings</p>
        </div>

        <button className="back-btn" onClick={() => router.push("/home")}>
          ← Home
        </button>
      </div>

      {/* FORM SECTION */}
      <div className="section">
        <h3>Add New Job</h3>

        <div className="form-box">
          <input
            placeholder="Job ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <input
            placeholder="Job Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <button className="add-btn" onClick={addJob}>
            + Add Job
          </button>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="section">
        <h3>Job Listings</h3>

        {jobs.length === 0 ? (
          <p className="empty">No jobs available</p>
        ) : (
          <div className="tableBox">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>
                      <span className="badge">{job.location}</span>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteJob(job.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
