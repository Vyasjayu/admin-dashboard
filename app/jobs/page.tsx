"use client";

import "./jobs.css";
import { useEffect, useState } from "react";
import API from "@/services/api";
import Link from "next/link";
import { Job } from "../types";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Jobs</h1>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <div className="job-title">{job.title}</div>
            <div className="job-location">{job.location}</div>

            <Link href={`/apply/${job._id}`}>
              <button className="apply-btn">Apply</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}