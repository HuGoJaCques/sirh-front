// features/auth/components/LoginForm.tsx
import { useState } from "react";
import { LogIn, UserCircle } from "lucide-react";
import type { LoginFormData } from "../types/auth.type";

export default function LoginForm() {
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login :", form);
    // appel API plus tard
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
          <UserCircle size={20} className="text-blue-600" />
        </div>
        <span className="font-semibold text-blue-600">SIRH</span>
      </div>

      {/* Titre */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bienvenue sur votre espace RH</h1>
        <p className="text-gray-500 mt-1 text-sm">Connectez-vous pour accéder à votre espace personnalisé</p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Adresse email</label>
          <input
            type="email"
            placeholder="john.doe@entreprise.fr"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••••"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Se souvenir + mot de passe oublié */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.rememberMe}
              onChange={e => setForm({ ...form, rememberMe: e.target.checked })}
              className="rounded"
            />
            Se souvenir de moi
          </label>
          <a href="#" className="text-blue-500 hover:underline">Mot de passe oublié ?</a>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <LogIn size={18} />
          Se connecter
        </button>

      </form>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center">
        Problème de connexion ? Contactez votre administrateur RH
      </p>

    </div>
  );
}