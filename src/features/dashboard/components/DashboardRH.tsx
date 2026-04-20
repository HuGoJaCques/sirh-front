import { Users, Hourglass, Palmtree, Scroll } from "lucide-react";
import KpiCard from "../../../components/kpicard/KpiCard";
import AbsencesBarChart from "./AbsencesBarChart";
import AbsencesPieChart from "./AbsencesPieChart";

export default function DashboardRH() {
    return (
        <div className="flex flex-col gap-6 p-6">

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <KpiCard icon={<Users size={24} />} badge="+2 ce mois" badgeColor="blue" value={48} label="Collaborateurs actifs" />
                <KpiCard icon={<Hourglass size={24} />} badge="Urgent" badgeColor="orange" value={7} label="Demandes en attente" />
                <KpiCard icon={<Palmtree size={24} />} badge="Aujourd'hui" badgeColor="green" value={5} label="Absents aujourd'hui" />
                <KpiCard icon={<Scroll size={24} />} badge="3 urgents" badgeColor="red" value="2 840€" label="Frais à rembourser" />
            </div>

            {/* Graphique des absences */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 items-stretch">
                <div className="xl:col-span-2 h-full">
                    <AbsencesBarChart />
                </div>
                <AbsencesPieChart />
            </div>
        </div>
    )
}