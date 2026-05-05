'use client';

import './dashboard.css';
import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    name: "",
    price: "",
    quantity: ""
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };


  const addProduct = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.price || !form.quantity) {
      alert('All fields are required');
      return;
    }

    try {
      await axios.post('/api/products', {
        name: form.name,
        price: Number(form.price),
        quantity: Number(form.quantity)
      });

      setForm({ name: '', price: '', quantity: '' });
      fetchProducts();
    } catch (err) {
      console.error('Add error:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
  try {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  } catch (err) {
    console.error("Delete error:", err);
  }
};

  // const deleteProduct = async (id: string) => {
  //   await axios.delete(`http://localhost:5000/products/${id}`);
  //   fetchProducts();
  // };

  const chartData = {
    labels: products.map(p => p.name),
    datasets: [
      {
        label: 'Quantity',
        data: products.map(p => p.quantity)
      }
    ]
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Product Dashboard</h2>

      <div className="form-card">
        <form onSubmit={addProduct}>
          <input
            className="form-control mb-2"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
          className="form-control mb-2"
            type="number"
            placeholder="Quantity"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />

          <button className="btn btn-primary">Add Product</button>
        </form>
      </div>

      <div className="table-card">
        <table className="table table-bordered">
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
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="chart-card">
        <Bar data={chartData} />
      </div>
    </div>
  );
}

function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
