"use client";

import "./login.css";
import { useForm } from "react-hook-form";
import API from "@/services/api";
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/auth";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await API.post("/auth/login", data);

      // 👉 Token store
      setToken(res.data.token);

      // 👉 Redirect to dashboard
      router.push("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-card">
        <h2>Login</h2>

        <input {...register("email")} placeholder="Email" className="login-input"/>
        <input {...register("password")} type="password" placeholder="Password" className="login-input" />

        <button className="login-button">Login</button>
      </form>
    </div>
  );
}