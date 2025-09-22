"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center py-4 px-8 fixed w-screen h-20 top-0">
      <div className="text-3xl font-bold">
        <Link href={"/"}>Veni's</Link>
      </div>
      <button className="md:hidden font-bold text-2xl absolute right-10">
        ☰
      </button>
      <div>
        <nav className="hidden md:flex">
          <ul className="flex gap-10">
            <li>
              <Link href={"/about"}>Sobre</Link>
            </li>
            <li>
              <Link href={"/backapi"}>Backapi</Link>
            </li>
            <li>
              <Link href={"/contacts"}>Contatos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
