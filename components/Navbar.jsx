import Link from "next/link"
import { AddressBook, Folders, HandWaving, House, Target, UserCircle } from "phosphor-react"
import { ThemeToggle } from "./ThemeToggle"
import { useRouter } from 'next/router'

export const Navbar = () => {

  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 w-full pb-3 flex justify-center z-50">
      <div className="p-3 bg-brandTransparent-500 rounded-lg backdrop-blur flex items-center justify-center gap-3 lg:text-3xl lg:gap-5 text-gray-100 text-2xl">
        <nav className="border-r border-gray-300 pr-3 lg:pr-5">
          <ul className="flex gap-6">
            <li title="Início" className={`hover:text-gray-200 hover:scale-105 active:scale-95 relative after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gray-100 ${router.pathname === "/" && "after:w-full scale-110"} transition-all duration-200`}><Link href="/" ><HandWaving /></Link></li>
            <li title="Projetos" className={`hover:text-gray-200 hover:scale-105 active:scale-95 relative after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gray-100 ${router.pathname === "/projects" && "after:w-full scale-110"} transition-all duration-200`}><Link href="/projects" ><Folders /></Link></li>
            <li title="Habilidades" className={`hover:text-gray-200 hover:scale-105 active:scale-95 relative after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gray-100 ${router.pathname === "/skills" && "after:w-full scale-110"} transition-all duration-200`}><Link href="/skills" ><Target /></Link></li>
            <li title="Sobre" className={`hover:text-gray-200 hover:scale-105 active:scale-95 relative after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gray-100 ${router.pathname === "/about" && "after:w-full scale-110"} transition-all duration-200`}><Link href="/about" ><UserCircle /></Link></li>
            <li title="Contato" className={`hover:text-gray-200 hover:scale-105 active:scale-95 relative after:h-[2px] after:absolute after:-bottom-[5px] after:left-0 after:bg-gray-100 ${router.pathname === "/contact" && "after:w-full scale-110"} transition-all duration-200`}><Link href="/contact" ><AddressBook /></Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  )
}