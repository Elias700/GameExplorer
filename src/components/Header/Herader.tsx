import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-10 mt-4">
      <div
        className="
          flex items-center justify-between
          bg-[linear-gradient(to_right,_#7A06F6,_#AA15DB,_#E524CD,_#FD8A18)]
          rounded-2xl
          px-6 py-4
        "
      >
        {/* LOGO */}
        <h2 className="text-white font-bold text-lg">
          Game Explorer
        </h2>

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="
            flex gap-6
            text-white font-bold
          ">
            <li className="hover:text-gray-300 transition cursor-pointer">Home</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Sobre</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Jogos</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Categorias</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Contato</li>
          </ul>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="
          md:hidden mt-2
          bg-[#1C1C1C]
          rounded-xl
          p-4
        ">
          <ul className="flex flex-col gap-4 text-white font-bold">
            <li>Home</li>
            <li>Sobre</li>
            <li>Jogos</li>
            <li>Categorias</li>
            <li>Contato</li>
          </ul>
        </nav>
      )}
    </header>
  );
}