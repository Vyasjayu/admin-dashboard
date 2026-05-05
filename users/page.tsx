"use client";

import "./login.css";
import { useForm } from "react-hook-form";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/auth";
import { useState } from "react";
import toast from "react-hot-toast";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true);

      const res = await API.post("/auth/login", data);

      // save token
      setToken(res.data.token);

      toast.success("Login successful 🚀");

      setTimeout(() => {
        router.push("/dashboard");
      }, 800);

    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      <form onSubmit={handleSubmit(onSubmit)} className="login-card">

        <h2 className="login-title">Welcome Back 👋</h2>

        {/* EMAIL */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format"
            }
          })}
          placeholder="Email"
          className="login-input"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* PASSWORD */}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters required" }
          })}
          type="password"
          placeholder="Password"
          className="login-input"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        {/* BUTTON */}
        <button
          className="login-button"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span onClick={() => router.push("/register")}>
            Register
          </span>
        </p>

      </form>
    </div>
  );
}
