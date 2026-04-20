import type { ReactNode } from "react";

type KpiCardProps = {
    icon: ReactNode;
    badge: string;
    badgeColor: "blue" | "orange" | "green" | "red";
    value: string | number;
    label: string;
}

const badgeStyles = {
    blue:   "text-blue-500 bg-blue-50",
    orange: "text-orange-500 bg-orange-50",
    green:  "text-green-500 bg-green-50",
    red:    "text-red-500 bg-red-50",
};

export default function KpiCard({ icon, badge, badgeColor, value, label }: KpiCardProps) {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 flex flex-col gap-3">

            {/* Icône + badge */}
            <div className="flex items-center justify-between">
            <div className={`text-${badgeStyles[badgeColor]} bg-${badgeStyles[badgeColor]} p-2 rounded-lg`}>
                {icon}
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]}`}>
                {badge}
            </span>
            </div>

            {/* Valeur + label */}
            <div>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{label}</p>
            </div>

        </div>
    );
}