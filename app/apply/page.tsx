"use client";

import "./apply.css";
import { useForm } from "react-hook-form";
import API from "@/services/api";
import { useParams } from "next/navigation";
import { useState } from "react";

interface ApplyForm {
  coverLetter: string;
  resume: FileList;
}

export default function Apply() {
  const { register, handleSubmit } = useForm<ApplyForm>();
  const params = useParams();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data: ApplyForm) => {
    const formData = new FormData();
    formData.append("resume", data.resume[0]);
    formData.append("coverLetter", data.coverLetter);

    try {
      await API.post(`/applications/${params.id}`, formData);
      setMessage("Application submitted successfully!");
      setError("");
    } catch {
      setError("Something went wrong!");
      setMessage("");
    }
  };

  return (
    <div className="apply-container">
      <form onSubmit={handleSubmit(onSubmit)} className="apply-card">
        <h2 className="apply-title">Apply for Job</h2>

        {message && <div className="apply-success">{message}</div>}
        {error && <div className="apply-error">{error}</div>}

        <textarea
          {...register("coverLetter")}
          placeholder="Write your cover letter..."
          className="apply-textarea"
        />

        <input type="file" {...register("resume")} className="apply-file" />

        <button className="apply-btn">Submit Application</button>
      </form>
    </div>
  );
}