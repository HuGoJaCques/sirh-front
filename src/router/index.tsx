import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import DashboardPage from "../pages/DashboardPage";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Sans sidebar */}
                <Route path="/" element={<LoginPage />} />

                {/* Avec sidebar — toutes les pages imbriquées dedans */}
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}