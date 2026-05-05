export default function DashboardCards() {
  const data = [
    { title: "Users", value: 120 },
    { title: "Jobs", value: 45 },
    { title: "Applications", value: 230 },
    { title: "Revenue", value: "$12,000" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded shadow">
          <h3 className="text-gray-500">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}