import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const absencesData = [
  { mois: "Sep", conges: 3, rtt: 1, maladie: 2 },
  { mois: "Oct", conges: 4, rtt: 2, maladie: 1 },
  { mois: "Nov", conges: 2, rtt: 1, maladie: 3 },
  { mois: "Déc", conges: 6, rtt: 2, maladie: 1 },
  { mois: "Jan", conges: 5, rtt: 3, maladie: 2 },
  { mois: "Fév", conges: 8, rtt: 4, maladie: 1 },
  { mois: "Mar", conges: 7, rtt: 2, maladie: 3 },
  { mois: "Avr", conges: 4, rtt: 1, maladie: 2 },
  { mois: "Mai", conges: 3, rtt: 2, maladie: 1 },
];

const legende = [
  { color: "#3b82f6", label: "Congés" },
  { color: "#8b5cf6", label: "RTT" },
  { color: "#10b981", label: "Maladie" },
];

export default function AbsencesBarChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-300 h-full">

      {/* Titre + légende */}
      <h2 className="text-sm font-semibold text-gray-800 mb-1">
        📊 Absences par mois (2026)
      </h2>
      <div className="flex items-center gap-4 mb-4">
        {legende.map(({ color, label }) => (
          <span key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
            {label}
          </span>
        ))}
      </div>

      {/* Graphique */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={absencesData} barSize={10} barGap={3}>
          <XAxis dataKey="mois" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} />
          <YAxis hide />
          <Tooltip cursor={{ fill: "#f3f4f6" }} />
          <Bar dataKey="conges"  fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="rtt"     fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="maladie" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}