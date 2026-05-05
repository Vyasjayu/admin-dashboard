"use client";

import Link from "next/link";

export default function Header({
  toggleSidebar,
  open
}: {
  toggleSidebar: () => void;
  open: boolean;
}) {
  return (
    <div className="header">
      
      {/* CLICK THIS */}
      <h2
        className="header-title"
        onClick={toggleSidebar}
        style={{ cursor: "pointer" }}
      >
        ☰ Admin Panel
      </h2>

<nav>
        <Link href="/login" className="logout-btn">Logout</Link>
</nav>
      {/* <button className="logout-btn" >
        Logout
      </button> */}
    </div>
  );
}