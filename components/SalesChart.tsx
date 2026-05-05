// "use client";
// import { useEffect, useState, FormEvent } from 'react';
// import { Bar } from 'react-chartjs-2';


// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// } from 'chart.js';

// const data = [
//   { name: "Jan", sales: 400 },
//   { name: "Feb", sales: 600 },
//   { name: "Mar", sales: 800 },
//   { name: "Apr", sales: 500 },
//   { name: "May", sales: 900 },
// ];

// export default function SalesChart() {
//   return (
//     <div className="bg-white p-5 mt-6 rounded shadow">
//       <h2 className="font-semibold mb-4">Sales Overview</h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }