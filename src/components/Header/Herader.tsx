

export function Header() {
  return (
    <header className="
            bg-[linear-gradient(to_right,_#7A06F6,_#AA15DB,_#E524CD,_#FD8A18)] 
            p-5 
            pr-8 
            rounded-4xl 
            ml-210
        "
    >
      <nav className="flex justify-end">
        <ul className="
            flex 
            gap-3 
            [&>li]:text-white 
            [&>li]:hover:text-gray-300
            [&>li]:cursor-pointer 
            [&>li]:transition 
            [&>li]:duration-300
            [&>li]:font-bold
          "
        >     
            <li>Home</li>
            <li>Sobre</li>
            <li>Jogos</li>
            <li>Categorias</li>
            <li>Contato</li>
        </ul>
      </nav>
    </header>   
  )
;}