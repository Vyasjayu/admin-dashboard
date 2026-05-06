"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./home.css";
import Link from "next/link";
// import { Link } from "lucide-react";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);
  const toggleSidebar = () => setOpen((prev) => !prev);

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <Sidebar open={open} onClose={closeSidebar} />
      <Header open={open} toggleSidebar={toggleSidebar} />

      <div className={`layout ${open ? "sidebar-open" : ""}`}>
        <div className="main-content">
          <div className="home-container">

            {/* HEADER */}
            <div className="home-header">
              <div>
                <h1>Welcome back, Admin 👋</h1>
                <p>{today} • Here's your system overview</p>
              </div>

              <div className="header-actions">
                <Link href="/jobs" className="home-btn">+ New Job</Link>
                <Link href="/users" className="home-btn">+ New User</Link>
              </div>
            </div>

            {/* BANNER */}
            <div className="highlight-banner">
              🚀 Platform activity increased by <strong>30%</strong> this week
            </div>

            {/* STATS */}
            <div className="stats-grid">
              <div className="stat-card">
                <span>📊</span>
                <div>
                  <h3>120+</h3>
                  <p>Total Jobs</p>
                </div>
              </div>

              <div className="stat-card">
                <span>👥</span>
                <div>
                  <h3>45+</h3>
                  <p>Users</p>
                </div>
              </div>

              <div className="stat-card">
                <span>📄</span>
                <div>
                  <h3>300+</h3>
                  <p>Applications</p>
                </div>
              </div>

              <div className="stat-card">
                <span>⚡</span>
                <div>
                  <h3>8</h3>
                  <p>Companies</p>
                </div>
              </div>
            </div>

            {/* MAIN GRID */}
            <div className="main-grid">

              {/* LEFT SIDE */}
              <div>

                {/* ACTIVITY */}
                <div className="card">
                  <h2>Recent Activity</h2>
                  <ul className="activity-list">
                    <li><span className="badge green"></span> New user registered</li>
                    <li><span className="badge blue"></span> Job posted</li>
                    <li><span className="badge purple"></span> Application submitted</li>
                    <li><span className="badge orange"></span> Job updated</li>
                  </ul>
                </div>

                {/* JOB TABLE */}
                <div className="card">
                  <h2>Recent Jobs</h2>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Role</th>
                        <th>Company</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Frontend Developer</td>
                        <td>Google</td>
                        <td className="status active">Active</td>
                      </tr>
                      <tr>
                        <td>Backend Developer</td>
                        <td>Amazon</td>
                        <td className="status closed">Closed</td>
                      </tr>
                      <tr>
                        <td>Full Stack Developer</td>
                        <td>Microsoft</td>
                        <td className="status active">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

              {/* RIGHT SIDE */}
              <div>

                {/* SYSTEM STATUS */}
                <div className="card">
                  <h2>System Status</h2>
                  <div className="status-item">🟢 Server Running</div>
                  <div className="status-item">🟢 Database Connected</div>
                  <div className="status-item">🟢 API Stable</div>
                </div>

                {/* TOP USERS */}
                <div className="card">
                  <h2>Top Recruiters</h2>
                  <ul className="user-list">
                    <li>👤 Priya Sharma <span>12 Jobs</span></li>
                    <li>👤 Rahul Singh <span>9 Jobs</span></li>
                    <li>👤 Amit Verma <span>7 Jobs</span></li>
                  </ul>
                </div>

                {/* PERFORMANCE */}
                <div className="card highlight-card">
                  <h2>Performance</h2>
                  <p>📈 Applications increased by <strong>18%</strong></p>
                  <p>👥 User growth <strong>+12%</strong></p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}