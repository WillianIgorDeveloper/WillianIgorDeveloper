import Head from 'next/head'
import Image from "next/image";

export default function Projects() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Projetos</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='container m-auto p-3 pb-14'>
        <h1 className="text-2xl border-b-2 pb-3 w-1/2 font-bold border-gray-800 dark:border-gray-100">Projetos</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image src="/projects-illustration-animate.svg" width="500" height="500" className="py-3 w-full md:w-2/5" />
          <div className="md:flex-1 md:p-5">
            <h2 className="text-xl font-medium pb-3">Destaques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-5 lg:gap-8 p-1">
              <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
                <Image src="/projects/converse.png" width="400" height="400" className="rounded w-full" />
                <p className="line-clamp-2 ">Um aplicativo de mensagens para você passar o tempo com os amigos</p>
                <div className="flex gap-3 font-medium">
                  <a href="https://converse-wid.vercel.app/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-4 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                  <a href="https://github.com/WillianIgorDeveloper/converse" target="_blank" rel="noreferrer"><button className="py-1 px-4 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
                </div>
              </div>
              <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
                <Image src="/projects/artificy.png" width="400" height="400" className="rounded w-full" />
                <p className="line-clamp-2 ">Um sistema de criador de fichas para o D&D5e</p>
                <div className="flex gap-3 font-medium">
                  <a href="https://artificy.vercel.app/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-4 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                  <a href="https://github.com/WillianIgorDeveloper/artificy" target="_blank" rel="noreferrer"><button className="py-1 px-4 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 my-5">
          <h2 className="pb-3 text-lg">Aplicações web</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 text-sm md:text-base">
            <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-2 lg:gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
              <Image src="/projects/ignite-lab.png" width="250" height="250" className="rounded w-full" />
              <p className="line-clamp-2 ">Projeto desenvolvido juntamente com o "Ignite Lab | 03" da Rocketseat</p>
              <div className="flex gap-3 font-medium">
                <a href="https://ignite-lab-03-green.vercel.app/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-3 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                <a href="https://github.com/WillianIgorDeveloper/ignite-lab-03" target="_blank" rel="noreferrer"><button className="py-1 px-3 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
              </div>
            </div>
            <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-2 lg:gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
              <Image src="/projects/to-do.png" width="250" height="250" className="rounded w-full" />
              <p className="line-clamp-2 ">Um simples aplicativo To-Do, feito apenas com JavaScript 'Vanilla'</p>
              <div className="flex gap-3 font-medium">
                <a href="https://willianigordeveloper.github.io/to-do-list/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-3 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                <a href="https://github.com/WillianIgorDeveloper/to-do-list" target="_blank" rel="noreferrer"><button className="py-1 px-3 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 my-3">
          <h2 className="pb-3 text-lg">Páginas web</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 text-sm md:text-base">
            <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-2 lg:gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
              <Image src="/projects/burguer-king.png" width="250" height="250" className="rounded w-full" />
              <p className="line-clamp-2 ">Projeto do desafio empire burger da plataforma brchallenges</p>
              <div className="flex gap-3 font-medium">
                <a href="https://willianigordeveloper.github.io/br-challenges-empire-burger/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-3 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                <a href="https://github.com/WillianIgorDeveloper/br-challenges-empire-burger" target="_blank" rel="noreferrer"><button className="py-1 px-3 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
              </div>
            </div>
            <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-2 lg:gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
              <Image src="/projects/beauty-sallon.png" width="250" height="250" className="rounded w-full" />
              <p className="line-clamp-2 ">Projeto criado durante a Next Level Week #6 da Rocketseat, missão Origin.</p>
              <div className="flex gap-3 font-medium">
                <a href="https://willianigordeveloper.github.io/BeautySalon/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-3 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                <a href="https://github.com/WillianIgorDeveloper/BeautySalon" target="_blank" rel="noreferrer"><button className="py-1 px-3 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
              </div>
            </div>
            <div className="card p-3 rounded-lg bg-gradient-to-b to-gray-300 from-gray-200 dark:to-gray-800 dark:from-gray-700 flex flex-col gap-2 lg:gap-3 hover:scale-105  transition-all duration-200 hover:dark:to-brand-800 hover:dark:from-brand-700 hover:to-brand-200 hover:from-brand-300">
              <Image src="/projects/edie.png" width="250" height="250" className="rounded w-full" />
              <p className="line-clamp-2 ">Solution for a challenge from Devchallenges.io.</p>
              <div className="flex gap-3 font-medium">
                <a href="https://willianigordeveloper.github.io/edie-homepage-devChallenges/" target="_blank" rel="noreferrer"><button className="py-1 bg-brand-600 hover:bg-brand-500 px-3 rounded-lg transition-colors duration-100 text-gray-100">Demo</button></a>
                <a href="https://github.com/WillianIgorDeveloper/edie-homepage-devChallenges" target="_blank" rel="noreferrer"><button className="py-1 px-3 border rounded-lg hover:text-gray-100 hover:bg-gray-800 hover:dark:bg-gray-50 hover:dark:text-gray-800 transition-colors duration-100 border-gray-800 dark:border-gray-100">Git</button></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}