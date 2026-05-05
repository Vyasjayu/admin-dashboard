"use client";

import "./register.css";
import { useForm } from "react-hook-form";
import API from "@/services/api";
import { useRouter } from "next/navigation";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const router = useRouter();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await API.post("/auth/register", data);
      router.push("/login");
    } catch (err: any) {
  console.error("Register error:", err.response?.data || err.message);
  alert(err.response?.data?.error || "Registration failed");
}
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-card">
        <h2 className="register-title">Create Account</h2>

        <input
          {...register("name")}
          placeholder="Full Name"
          className="register-input"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="register-input"
        />

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="register-input"
        />

        <button className="register-btn">Register</button>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => router.push("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}