import Image from "next/image";
import Head from 'next/head'

export default function Skills() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Habilidades</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='container m-auto p-3 pb-14'>
        <h1 className="text-2xl border-b-2 pb-3 w-1/2 font-bold border-gray-800 dark:border-gray-100">Habilidades</h1>
        <div className="lg:flex lg:gap-10">
          <Image src="/skills-illustration-animate.svg" width="500" height="500" className="my-3 py-3 w-4/5 md:w-2/5 mx-auto" />
          <div className="p-3 flex-1">
            <div className="p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
              <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-28 md:h-32 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                <Image src="/skills-icons/js.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
                <h3>JavaScript</h3>
              </div>
              <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-28 md:h-32 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                <Image src="/skills-icons/react.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
                <h3>React</h3>
              </div>
              <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-28 md:h-32 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                <Image src="/skills-icons/next.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
                <h3>Next</h3>
              </div>
              <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-28 md:h-32 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                <Image src="/skills-icons/tailwind.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
                <h3>Tailwind</h3>
              </div>
            </div>
            <div className="p-3">
              <div className="p-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-3 text-xs">
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/git.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Git</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/terminal.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Terminal</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/sass.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Sass</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/ts.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>TypeScript</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/figma.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Figma</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/supabase.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Supabase</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/antdesign.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Antdesign</h3>
                </div>
                <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 h-16 md:h-20 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700">
                  <Image src="/skills-icons/node.svg" width="250" height="250" className="w-8 h-8" />
                  <h3>Node</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}