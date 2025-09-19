import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white shadow-lg sticky w-screen top-0 z-100">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/" className="hover:text-blue-300 transition-colors">
            NextJS
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-lg hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="text-lg hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Contatos
              </Link>
            </li>
            <li>
              <Link
                href="/backpage"
                className="text-lg hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                BackPage
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
