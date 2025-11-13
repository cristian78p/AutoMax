"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/catalogo", label: "Catálogo" },
        { href: "/test", label: "Favoritos" },
        { href: "/login", label: "Acceder" },
    ];
    return (
        <header className="flex items-center justify-between px-16 h-20 shadow-sm bg-white/80 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center space-x-3 h-full">
            <Image
            src="/logo.png"
            alt="AUTOMAX Logo"
            width={160}
            height={40}
            className="h-full object-contain drop-shadow-sm"
            />
        </div>

        {/* Menú */}
        <nav className="flex space-x-8 text-gray-700 font-medium">
            {links.map((link) => {
            const isActive = pathname === link.href;
            return (
                <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "border border-gray-300 bg-gray-300 text-gray-900 shadow-sm"
                  : "hover:text-blue-700 hover:bg-gray-50"
                }`}
                >
                {link.label}
                </Link>
            );
            })}
        </nav>
        </header>
    );
}