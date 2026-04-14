import { LoginForm } from "../features/auth/components/LoginForm";
import image from "../assets/undraw_wall-post_e47r.svg";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900">

      {/* Panneau gauche — formulaire */}
      <div className="w-full md:w-[400px] bg-white p-10 flex items-center rounded-r-2xl">
        <div className="w-full">
          <LoginForm />
        </div>
      </div>

      {/* Panneau droit — illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <div className="bg-white/10 rounded-2xl p-10">
          <img
            src={image}
            alt="illustration RH"
            className="w-100 opacity-90"
          />
        </div>
      </div>

    </div>
  );
}