import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password } = body;

    // ✅ Validation
    if (!name || !email || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Check existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return Response.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // ✅ Hash password
    const hashed = await bcrypt.hash(password, 10);

    // ✅ Create user
    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    // ✅ Return safe data
    return Response.json(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      { status: 201 }
    );

  } catch (err: any) {
    console.error("REGISTER ERROR:", err); // 🔥 VERY IMPORTANT

    return Response.json(
      { error: err.message || "Registration failed" },
      { status: 500 }
    );
  }
}
