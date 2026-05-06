import Link from "next/link";
import "./landing.css";

export default function LandingPage() {

  const stats = [
    { label: "Total Jobs", value: "120+" },
    { label: "Users", value: "45+" },
    { label: "Companies", value: "8" },
  ];

  const insights = [
    "15 new job postings this week",
    "5 companies joined recently",
    "User activity increased by 30%",
    "3 jobs updated today",
  ];

  const recentJobs = [
    "Frontend Developer - Google",
    "Backend Engineer - Amazon",
    "Full Stack Developer - Microsoft",
  ];

  const activeUsers = [
    "Sapna Vyas (Admin)",
    "Priya Verma (HR)",
    "Rahul Singh (Recruiter)",
  ];

  return (
    <div className="landing-container">

      {/* HEADER */}
      <header className="landing-header">
        <h2>🚀 Job Board Admin</h2>

        <div className="nav-actions">
          <Link href="/login" className="btn outline">Login</Link>
          <Link href="/register" className="btn primary">Register</Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="landing-main">

        {/* LEFT SIDE */}
        <section className="landing-content">
          <h1>Manage Everything in One Place</h1>

          <p>
            A powerful admin dashboard to manage jobs, users, applications,
            and analytics with real-time insights and performance tracking.
          </p>

          {/* STATS */}
          <div className="stats">
            {stats.map((item, i) => (
              <div key={i} className="stat-box">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          {/* INSIGHTS */}
          <div className="insights">
            <h3>📌 System Insights</h3>
            <ul>
              {insights.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="cta">
            <Link href="/login" className="btn primary">
              Get Started →
            </Link>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="landing-cards">

          {/* ANALYTICS */}
          <div className="card">
            <h3>📊 Analytics Overview</h3>
            <p>Track growth, performance, and hiring trends.</p>

            <div className="mini-stats">
              <span>📈 +30% Growth</span>
              <span>💼 15 Jobs</span>
              <span>🏢 8 Companies</span>
            </div>
          </div>

          {/* RECENT JOBS */}
          <div className="card">
            <h3>💼 Recent Jobs</h3>
            <ul>
              {recentJobs.map((job, i) => (
                <li key={i}>{job}</li>
              ))}
            </ul>
          </div>

          {/* USERS */}
          <div className="card">
            <h3>👥 Active Users</h3>
            <ul>
              {activeUsers.map((user, i) => (
                <li key={i}>{user}</li>
              ))}
            </ul>
          </div>

          {/* STATUS */}
          <div className="card status">
            <h3>⚡ System Status</h3>
            <p><span className="dot green"></span> Server Running</p>
            <p><span className="dot green"></span> Database Connected</p>
            <p><span className="dot green"></span> API Stable</p>
          </div>

        </section>

      </main>

    </div>
  );
}
