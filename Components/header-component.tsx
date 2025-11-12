import Image from "next/image";

export default function Header() {
 return (
    <header className="flex items-center justify-between px-16 h-20 shadow-sm bg-white/80 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center space-x-3 h-full">
            <Image
            src="/logo.png"
            alt="AUTOMAX Logo"
            width={160}   // puedes aumentar
            height={40}   // mantén proporcional
            className="h-full object-contain drop-shadow-sm"
            />
        </div>

        {/* Menú */}
        <nav className="flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-700 transition">Inicio</a>
            <a href="#" className="hover:text-blue-700 transition">Catálogo</a>
            <a href="#" className="hover:text-blue-700 transition">Favoritos</a>
            <a href="#" className="hover:text-blue-700 transition">Perfil</a>
        </nav>
    </header>
  );
}