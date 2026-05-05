'use client';

import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
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

    if (!form.name || !form.price || !form.quantity) return alert('Fill all fields');

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
        <h2>Product Dashboard</h2>
      </div>

      {/* CARDS */}
      <div className="cards">
        <div className="card">
          <h4>Total Products</h4>
          <p>{products.length}</p>
        </div>

        <div className="card">
          <h4>Total Quantity</h4>
          <p>{products.reduce((a, b) => a + b.quantity, 0)}</p>
        </div>

        <div className="card">
          <h4>Total Value</h4>
          <p>
            ${products.reduce((a, b) => a + b.price * b.quantity, 0)}
          </p>
        </div>
      </div>

      {/* FORM */}
      <form className="form" onSubmit={addProduct}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
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

      {/* TABLE */}
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
                <td>${p.price}</td>
                <td>{p.quantity}</td>
                <td>
                  <button onClick={() => deleteProduct(p._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CHART */}
      <div className="chart">
        <Bar data={chartData} />
      </div>

    </div>
  );
}
