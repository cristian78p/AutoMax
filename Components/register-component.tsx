"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterComponent() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");

    if (!nombre || !telefono || !email || !password || !confirmPassword) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMensaje("El correo electrónico no es válido.");
      return;
    }

    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    try {
      console.log("Registrando usuario:", { nombre, telefono, email });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMensaje("✅ Registro exitoso");
      setTimeout(() => router.push("/login"), 1500);
    } catch (error) {
      console.error("Error en el registro:", error);
      setMensaje("❌ Ocurrió un error al registrarse. Intenta de nuevo.");
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
          Registrar Cuenta
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

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
            <label className="block text-gray-600 text-sm mb-1">Teléfono</label>
            <input
              type="tel"
              name="tel"
              autoComplete="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+57 300 1234567"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {mensaje && (
            <p className="text-center text-sm text-red-600 font-medium">
              {mensaje}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition"
          >
            Registrarse
          </button>

          <div className="text-center text-sm text-gray-600 mt-2">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="text-blue-700 font-medium hover:underline"
            >
              Iniciar Sesión
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