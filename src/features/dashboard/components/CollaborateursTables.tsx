import { useState } from "react";
import { MoreVertical, Search } from "lucide-react";

// type Collaborateur
type Collaborateur = {
  initiales: string;
  couleur: string;
  nom: string;
  poste: string;
  service: string;
  conges: number;
  rtt: number;
  statut: "Présent" | "En congé" | "Télétravail" | "RTT" | "Absent";
  frais?: string;
}

// constants
const statutStyles: Record<Collaborateur["statut"], string> = {
  "Présent":     "text-green-500",
  "En congé":    "text-red-500",
  "Télétravail": "text-blue-500",
  "RTT":         "text-purple-500",
  "Absent":      "text-orange-500",
};

const services = ["Tous les services", "IT", "Design", "RH", "Finance"];

// Mock data
const collaborateurs: Collaborateur[] = [
  { initiales: "JD", couleur: "bg-blue-500",   nom: "John Doe",   poste: "Développeur",  service: "IT",     conges: 14, rtt: 8,  statut: "Présent",     frais: "261,90€" },
  { initiales: "ML", couleur: "bg-orange-400", nom: "Marie L.",   poste: "Développeuse", service: "IT",     conges: 21, rtt: 10, statut: "En congé" },
  { initiales: "TV", couleur: "bg-teal-500",   nom: "Thomas V.",  poste: "Dev Senior",   service: "IT",     conges: 18, rtt: 6,  statut: "Télétravail" },
  { initiales: "AR", couleur: "bg-pink-500",   nom: "Alice R.",   poste: "Designer",     service: "Design", conges: 12, rtt: 9,  statut: "RTT",         frais: "87,90€" },
];


export default function CollaborateursTable() {
  const [search, setSearch]   = useState("");
  const [service, setService] = useState("Tous les services");

  const filtered = collaborateurs.filter((c) => {
    const matchSearch  = c.nom.toLowerCase().includes(search.toLowerCase()) ||
                         c.poste.toLowerCase().includes(search.toLowerCase());
    const matchService = service === "Tous les services" || c.service === service;
    return matchSearch && matchService;
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

      {/* En-tête */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-wrap gap-3">
        <h2 className="text-sm font-semibold text-gray-800">
          👤 Collaborateurs — Soldes & statuts
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
            />
          </div>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Tableau scrollable sur mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs text-gray-400 uppercase tracking-wider">
            <tr>
              <th className="px-5 py-3 text-left">Collaborateur</th>
              <th className="px-5 py-3 text-left hidden sm:table-cell">Service</th>
              <th className="px-5 py-3 text-left hidden lg:table-cell">Congés payés</th>
              <th className="px-5 py-3 text-left hidden lg:table-cell">RTT</th>
              <th className="px-5 py-3 text-left hidden sm:table-cell">Statut aujourd'hui</th>
              <th className="px-5 py-3 text-left hidden lg:table-cell">Frais en attente</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-gray-400">
                  Aucun collaborateur trouvé
                </td>
              </tr>
            ) : (
              filtered.map((c) => (
                <tr key={c.nom} className="hover:bg-gray-50 transition-colors">

                  {/* Nom + poste + statut inline sur mobile */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${c.couleur} flex items-center justify-center text-white text-xs font-semibold shrink-0`}>
                        {c.initiales}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{c.nom}</p>
                        <p className="text-xs text-gray-400">{c.poste}</p>
                        {/* Statut visible uniquement sous sm */}
                        <span className={`sm:hidden flex items-center gap-1 text-xs font-medium mt-0.5 ${statutStyles[c.statut]}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {c.statut}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md">
                      {c.service}
                    </span>
                  </td>

                  <td className="px-5 py-3.5 text-gray-700 hidden lg:table-cell">
                    {c.conges} <span className="text-gray-400">/ 25j</span>
                  </td>

                  <td className="px-5 py-3.5 text-gray-700 hidden lg:table-cell">
                    {c.rtt} <span className="text-gray-400">/ 12j</span>
                  </td>

                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <span className={`flex items-center gap-1.5 font-medium text-xs ${statutStyles[c.statut]}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {c.statut}
                    </span>
                  </td>

                  <td className={`px-5 py-3.5 font-medium hidden lg:table-cell ${c.frais ? "text-orange-500" : "text-gray-300"}`}>
                    {c.frais ?? "—"}
                  </td>

                  <td className="px-5 py-3.5 text-right">
                    <button
                      aria-label={`Options pour ${c.nom}`}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}