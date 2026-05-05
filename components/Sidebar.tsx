"use client";

import Link from "next/link";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div className={`sidebar ${open ? "" : "closed"}`}>
      
      {/* * button to close sidebar */}
      {open && (
        <button className="sidebar-close-btn" onClick={onClose}>
          X
        </button>
      )}

      <h1 className="sidebar-title">Admin Panel</h1>

      <nav className="sidebar-nav">
        <Link href="/dashboard" className="sidebar-link">Product Dashboard</Link>
        <Link href="/jobs" className="sidebar-link">Jobs</Link>
        <Link href="/users" className="sidebar-link">Users</Link>
      </nav>
    </div>
  );
}