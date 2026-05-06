'use client';

import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { useRouter } from "next/navigation";
import "./dashboard.css";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addProduct = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.quantity) {
      return alert('Please fill all fields');
    }

    setLoading(true);

    try {
      await axios.post('/api/products', {
        name: form.name,
        price: Number(form.price),
        quantity: Number(form.quantity)
      });

      setForm({ name: '', price: '', quantity: '' });
      fetchProducts();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const totalQuantity = products.reduce((a, b) => a + b.quantity, 0);
  const totalValue = products.reduce((a, b) => a + b.price * b.quantity, 0);

  const chartData = {
    labels: products.map(p => p.name),
    datasets: [
      {
        label: 'Quantity',
        data: products.map(p => p.quantity),
        backgroundColor: '#4f46e5'
      }
    ]
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="topbar">
        <div>
          <h2>📊 Product Dashboard</h2>
          <p className="subtitle">Manage inventory and track performance</p>
        </div>

        <button className="back-btn" onClick={() => router.push("/home")}>
          ← Home
        </button>
      </div>

      {/* STATS */}
      <div className="cards">
        <div className="card">
          <h4>Total Products</h4>
          <p>{products.length}</p>
        </div>

        <div className="card">
          <h4>Total Quantity</h4>
          <p>{totalQuantity}</p>
        </div>

        <div className="card">
          <h4>Total Value</h4>
          <p>₹ {totalValue.toLocaleString()}</p>
        </div>
      </div>

      {/* FORM */}
      <div className="section">
        <h3>Add New Product</h3>

        <form className="form" onSubmit={addProduct}>
          <input
            placeholder="Product Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
            type="number"
            placeholder="Quantity"
            value={form.quantity}
            onChange={e => setForm({ ...form, quantity: e.target.value })}
          />

          <button disabled={loading}>
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="section">
        <h3>Product List</h3>

        {products.length === 0 ? (
          <p className="empty">No products added yet</p>
        ) : (
          <div className="tableBox">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map(p => (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>₹ {p.price}</td>
                    <td>{p.quantity}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteProduct(p._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CHART */}
      <div className="section">
        <h3>Inventory Overview</h3>

        {products.length > 0 ? (
          <div className="chart">
            <Bar data={chartData} />
          </div>
        ) : (
          <p className="empty">No data for chart</p>
        )}
      </div>

    </div>
  );
}
