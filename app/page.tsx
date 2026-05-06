"use client";

import { useRouter } from "next/navigation";
import "./landing.css";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="landing-container">

      {/* LEFT SIDE */}
      <div className="landing-content">
        <h1>Admin Dashboard</h1>

        <p>
          Manage Jobs, Users, Applications, and System Data from a single
          powerful admin panel.
        </p>

        {/* STATS */}
        <div className="stats">
          <div className="stat-box">
            <h3>120+</h3>
            <p>Total Jobs</p>
          </div>

          <div className="stat-box">
            <h3>45+</h3>
            <p>Registered Users</p>
          </div>

          <div className="stat-box">
            <h3>8</h3>
            <p>Active Companies</p>
          </div>
        </div>

        {/* QUICK INSIGHTS */}
        <div className="insights">
          <h3>📌 System Insights</h3>

          <ul>
            <li>✔ 15 new job postings this week</li>
            <li>✔ 5 companies joined recently</li>
            <li>✔ User activity increased by 30%</li>
            <li>✔ 3 jobs updated today</li>
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="btn-group">
          <button onClick={() => router.push("/login")} className="btn login">
            Login
          </button>

          <button onClick={() => router.push("/register")} className="btn register">
            Register
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="landing-image">

        {/* RECENT JOBS */}
        <div className="feature-card">
          <h3>💼 Recent Jobs</h3>
          <p>Frontend Developer - Google</p>
          <p>Backend Developer - Amazon</p>
          <p>Full Stack Developer - Microsoft</p>
        </div>

        {/* USERS SNAPSHOT */}
        <div className="feature-card">
          <h3>👥 Active Users</h3>
          <p>• Sapna Vyas (Admin)</p>
          <p>• Priya Verma (HR)</p>
          <p>• Rahul Singh (Recruiter)</p>
        </div>

        {/* SYSTEM STATUS */}
        <div className="feature-card">
          <h3>⚡ System Status</h3>
          <p>Server: Running 🟢</p>
          <p>Database: Connected 🟢</p>
          <p>API: Stable 🟢</p>
        </div>

      </div>

    </div>
  );
}"use client";

import { useRouter } from "next/navigation";
import "./landing.css";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="landing-container">

      {/* LEFT SIDE */}
      <div className="landing-content">
        <h1>Admin Dashboard</h1>

        <p>
          Manage Jobs, Users, Applications, and System Data from a single
          powerful admin panel.
        </p>

        {/* STATS */}
        <div className="stats">
          <div className="stat-box">
            <h3>120+</h3>
            <p>Total Jobs</p>
          </div>

          <div className="stat-box">
            <h3>45+</h3>
            <p>Registered Users</p>
          </div>

          <div className="stat-box">
            <h3>8</h3>
            <p>Active Companies</p>
          </div>
        </div>

        {/* QUICK INSIGHTS */}
        <div className="insights">
          <h3>📌 System Insights</h3>

          <ul>
            <li>✔ 15 new job postings this week</li>
            <li>✔ 5 companies joined recently</li>
            <li>✔ User activity increased by 30%</li>
            <li>✔ 3 jobs updated today</li>
          </ul>
        </div>

        {/* BUTTONS */}
        <div className="btn-group">
          <button onClick={() => router.push("/login")} className="btn login">
            Login
          </button>

          <button onClick={() => router.push("/register")} className="btn register">
            Register
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="landing-image">

        {/* RECENT JOBS */}
        <div className="feature-card">
          <h3>💼 Recent Jobs</h3>
          <p>Frontend Developer - Google</p>
          <p>Backend Developer - Amazon</p>
          <p>Full Stack Developer - Microsoft</p>
        </div>

        {/* USERS SNAPSHOT */}
        <div className="feature-card">
          <h3>👥 Active Users</h3>
          <p>• Sapna Vyas (Admin)</p>
          <p>• Priya Verma (HR)</p>
          <p>• Rahul Singh (Recruiter)</p>
        </div>

        {/* SYSTEM STATUS */}
        <div className="feature-card">
          <h3>⚡ System Status</h3>
          <p>Server: Running 🟢</p>
          <p>Database: Connected 🟢</p>
          <p>API: Stable 🟢</p>
        </div>

      </div>

    </div>
  );
}
