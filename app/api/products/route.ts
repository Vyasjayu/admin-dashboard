import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return Response.json(product);
}

export async function PUT(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const updated = await Product.findByIdAndUpdate(body._id, body, { new: true });
  return Response.json(updated);
}

export async function DELETE(req: NextRequest) {
  await connectDB();
  const { id } = await req.json();
  await Product.findByIdAndDelete(id);
  return Response.json({ message: 'Deleted' });
}