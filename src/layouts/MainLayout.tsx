import { Outlet } from "react-router-dom";
import Sidebar from "../features/sidebar/components/Sidebar";

export default function MainLayout() {
    return (
        <div className="flex h-screen bg-gray-100r">
            <Sidebar/>
            <main className="flex-1 overflow-auto p-6">
                <Outlet />
            </main>
        </div>
    )
}