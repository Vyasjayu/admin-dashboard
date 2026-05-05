import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; 

  await connectDB();

  const deleted = await Product.findByIdAndDelete(id);

  if (!deleted) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  return Response.json({ message: "Deleted successfully" });
}