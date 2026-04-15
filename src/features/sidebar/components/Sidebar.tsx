import { LayoutDashboard, TicketCheck, Users, Calendar, ChartNoAxesColumn, Settings, LogOut, Shield, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import SidebarText from "./SidebarText";

function NavItem({ to, icon: Icon, label, isOpen }: { to: string; icon: any; label: string; isOpen: boolean }) {
  return (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
            ${isActive
                ? "bg-blue-500/20 text-blue-400"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`
        }
    >
        <Icon size={18} className="shrink-0" />
        <SidebarText isOpen={isOpen}>{label}</SidebarText>
    </NavLink>
  );
}

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => { setIsOpen(window.innerWidth >= 1024); };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside 
            className={`flex flex-col h-screen bg-[#111827] shrink-0 transition-all duration-500
            ${isOpen 
                ? "w-60" 
                : "w-16"}
        `}>

        {/* Logo + bouton toggle */}
        <div className="px-3 pt-5 pb-3 flex items-center justify-between">

            <SidebarText isOpen={isOpen}>
                <div>
                <p className="text-[15px] tracking-widest uppercase text-slate-600">SIRH</p>
                <span className="text-2xl font-bold text-white tracking-tight">
                    mon<span className="text-blue-400">RH</span>
                </span>
                </div>
            </SidebarText>
        
            <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-slate-400 hover:text-white transition-colors ${!isOpen ? "mx-auto" : ""}`}
            aria-label="toggle-sidebar"
            >
                {isOpen 
                    ? <X size={20} /> 
                    : <Menu size={20} />
                }
            </button>

        </div>

        <hr className="border-white/10 w-full" />

        {/* User card */}
        <div className={`mx-3 my-6 px-3 py-3 rounded-xl bg-white/5 flex items-center
            ${isOpen 
                ? "justify-start gap-3" 
                : "justify-center"}
        `}>
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                SA
            </div>

            <SidebarText isOpen={isOpen}>
                <div>
                <p className="text-sm font-semibold text-white">Sophie Admin</p>
                <p className="text-[11px] text-slate-500">DRH · Super Admin</p>
                </div>
            </SidebarText>   
        </div>

        <hr className="border-white/10 w-full mb-2" />

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-3 flex-1">
            <SidebarText isOpen={isOpen}>
                <p className="text-[10px] uppercase tracking-widest text-slate-600 px-3 mb-2">
                    Menu
                </p>
            </SidebarText>
            <NavItem to="/dashboard" icon={LayoutDashboard} label="Accueil" isOpen={isOpen} />
            <NavItem to="/validations" icon={TicketCheck} label="Validations" isOpen={isOpen} />
            <NavItem to="/employes" icon={Users} label="Collaborateurs" isOpen={isOpen} />
            <NavItem to="/conges" icon={Calendar} label="Planning global" isOpen={isOpen} />
            <NavItem to="/documents" icon={ChartNoAxesColumn} label="Reporting" isOpen={isOpen} />
        
            <SidebarText isOpen={isOpen}>
                <p className="text-[10px] uppercase tracking-widest text-slate-600 px-3 mb-2">
                    Administrations
                </p>
            </SidebarText>
            <NavItem to="/parametres" icon={Settings} label="Paramètres" isOpen={isOpen} />
            <NavItem to="/permissions" icon={Shield} label="Rôles & droits" isOpen={isOpen} />
        </nav>

        {/* Déconnexion */}
        <div className="pb-3 px-3">
            <button className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 w-full text-slate-400 hover:bg-white/5 hover:text-red-400
                ${isOpen 
                    ? "gap-3 justify-start" 
                    : "justify-center"}
            `}>
                <LogOut size={18} className="shrink-0" />

                <SidebarText isOpen={isOpen}>Déconnexion</SidebarText>
            </button>
         </div>

    </aside>
  );
}