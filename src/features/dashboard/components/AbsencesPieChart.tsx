import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const repartitionData = [
  { name: "Congés payés", value: 50, fill: "#3b82f6" },
  { name: "RTT",          value: 20, fill: "#8b5cf6" },
  { name: "Télétravail",  value: 16, fill: "#10b981" },
  { name: "Maladie",      value: 14, fill: "#f59e0b" },
];

export default function AbsencesPieChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-300 h-full">

      <h2 className="text-sm font-semibold text-gray-800 mb-4">
        Répartition des absences
      </h2>

      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie
            data={repartitionData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={75}
            dataKey="value"
            paddingAngle={3}
          />
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>

      {/* Légende */}
      <div className="flex flex-col gap-1.5 mt-2">
        {repartitionData.map(({ name, value, fill }) => (
          <div key={name} className="flex items-center justify-between text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fill }} />
              {name}
            </span>
            <span className="font-semibold">{value}%</span>
          </div>
        ))}
      </div>

    </div>
  );
}