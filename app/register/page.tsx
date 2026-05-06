"use client";

import "./register.css";
import { useForm } from "react-hook-form";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      setLoading(true);

      await API.post("/auth/register", data);

      toast.success("Registration successful 🎉");

      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (err: any) {
      toast.error(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-card">

        <h2 className="register-title">Create Account</h2>

        {/* NAME */}
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Min 3 characters" }
          })}
          placeholder="Full Name"
          className="register-input"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

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
          className="register-input"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* PASSWORD */}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" }
          })}
          type="password"
          placeholder="Password"
          className="register-input"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        {/* BUTTON */}
        <button className="register-btn" disabled={loading}>
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => router.push("/login")}>
            Login
          </span>
        </p>

      </form>
    </div>
  );
}
