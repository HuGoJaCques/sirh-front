import Header from "../layouts/header/Header";
import { UserPlus } from "lucide-react";
import DashboardRH from "../features/dashboard/components/DashboardRH";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <Header
        title="Tableau de bord"  
        subtitle="Vue d'ensemble de vos ressources humaines"
        hasNotifications={true}
        notificationCount={3}
        actions={
          <button 
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <UserPlus size={16} aria-hidden="true"/>
            Ajouter un collaborateur
          </button>
        }        
      />

      {/* Contenu principal du tableau de bord */}
      <main className="flex-1 gap-6">
        <DashboardRH />
      </main>
    </div>
  );
}