"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginComponent() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");

    if (!email || !password) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMensaje("El correo electrónico no es válido.");
      return;
    }

    try {
      // Aquí podrías autenticar con tu API o Firebase
      console.log("Iniciando sesión:", { email, password });

      // Simulación de éxito
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMensaje("✅ Inicio de sesión exitoso");

      // Redirigir al home o dashboard
      setTimeout(() => router.push("/"), 1500);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMensaje("❌ Error al iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8 animate-fadeIn">
            <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32 scale-125">
                    <img
                    src="/logo.png"
                    alt="AUTOMAX Logo"
                    className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>
            </div>

            <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
            Iniciar Sesión
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-600 text-sm mb-1">Correo</label>
                <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>

            <div>
                <label className="block text-gray-600 text-sm mb-1">Contraseña</label>
                <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>

            {mensaje && (
                <p className="text-center text-sm font-medium text-red-600">
                {mensaje}
                </p>
            )}

            <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition"
            >
                Iniciar Sesión
            </button>

            <div className="text-blue-700 font-medium hover:underline text-sm text-center">
                <a href="#" className="text-blue-700 hover:underline">
                ¿Olvidaste tu contraseña?
                </a>
            </div>

            <div className="text-center text-sm text-gray-600 mt-2">
                ¿No tienes una cuenta?{" "}
                <Link
                href="/register"
                className="text-blue-700 font-medium hover:underline"
                >
                Regístrate
                </Link>
            </div>
            </form>

            <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 bg-[#1877F2] text-white py-2 rounded-md font-medium hover:bg-[#166FE5] transition">
                <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                <span>Continua con Facebook</span>
            </button>

            <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition">
                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                <span>Continua con Google</span>
            </button>

            <button className="w-full flex items-center justify-center space-x-2 bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900 transition">
                <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                <span>Continua con Apple</span>
            </button>
            </div>
        </div>
    </div>
  );
}
