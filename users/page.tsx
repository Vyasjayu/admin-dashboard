"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "./users.css";
import router from "next/router";


export default function UsersPage() {
      const router = useRouter();
  const users = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com" },
    { id: 2, name: "Priya Verma", email: "priya@gmail.com" },
    { id: 3, name: "Rahul Singh", email: "rahul@gmail.com" }
  ];

  return (
    <div className="page-container">
         <button
        className="back-btn"
        onClick={() => router.push("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <h1 className="page-title">Users</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}