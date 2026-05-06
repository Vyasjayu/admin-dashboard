"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "./users.css";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const users: User[] = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com" },
    { id: 2, name: "Priya Verma", email: "priya@gmail.com" },
    { id: 3, name: "Rahul Singh", email: "rahul@gmail.com" }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">

      {/* HEADER */}
      <div className="topbar">
        <div>
          <h1>👥 User Management</h1>
          <p className="subtitle">Manage and monitor all registered users</p>
        </div>

        <button className="back-btn" onClick={() => router.push("/home")}>
          ← Home
        </button>
      </div>

      {/* STATS */}
      <div className="cards">
        <div className="card">
          <h4>Total Users</h4>
          <p>{users.length}</p>
        </div>

        <div className="card">
          <h4>Active Users</h4>
          <p>{users.length}</p>
        </div>

        <div className="card">
          <h4>Admins</h4>
          <p>1</p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="section">
        <input
          className="search"
          placeholder="🔍 Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="section">
        <h3>User List</h3>

        {filteredUsers.length === 0 ? (
          <p className="empty">No users found</p>
        ) : (
          <div className="tableBox">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className="badge active">Active</span>
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
