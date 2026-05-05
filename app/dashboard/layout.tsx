"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "@/components/styles/layout.css";

export default function DashboardLayout({ children }: any) {
  const [open, setOpen] = useState(false); // hidden by default

  const toggleSidebar = () => {
    setOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <Sidebar open={open} onClose={closeSidebar} />

      <Header open={open} toggleSidebar={toggleSidebar} />

      <div
        style={{
          marginLeft: open ? "260px" : "0",
          paddingTop: "60px",
          transition: "0.3s"
        }}
      >
        {children}
      </div>
    </>
  );
}
