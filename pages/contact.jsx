import Image from 'next/image'
import Head from 'next/head'
import { Download } from 'phosphor-react'

export default function Contact() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Contato</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='container m-auto p-3 pb-20'>
        <h1 className="text-2xl border-b-2 pb-3 w-1/2 font-bold border-gray-800 dark:border-gray-100">Contato</h1>
        <div className='lg:flex lg:items-center lg:gap-10'>
          <Image src="/contact-illustration-animate.svg" width="500" height="500" className="my-3 pt-3 w-4/5 md:w-2/5 mx-auto" />
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-2 lg:flex-1'>
            <a href="mailto:willianigordeveloper@gmail.com" target="_blank" className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-3 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700 p-3">
              <Image src="/social-icons/gmail.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
              <h3>Gmail</h3>
            </a>
            <a href="https://github.com/WillianIgorDeveloper" target="_blank" className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-3 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700 p-3">
              <Image src="/social-icons/github.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
              <h3>Github</h3>
            </a>
            <a href="https://www.linkedin.com/in/willian-igor-santos/" target="_blank" className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-3 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700 p-3">
              <Image src="/social-icons/linkedin.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
              <h3>Linkedin</h3>
            </a>
            <a href="https://t.me/WillianIgor" target="_blank" className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-3 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700 p-3">
              <Image src="/social-icons/telegram.svg" width="250" height="250" className="w-10 h-10 lg:w-14 lg:h-14" />
              <h3>Telegram</h3>
            </a>
            <a href="https://cdn.discordapp.com/attachments/892816555069538375/1052337773585121330/Curriculo.pdf" target="_blank" className="rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-3 hover:bg-gradient-to-b hover:to-gray-100 hover:from-gray-50 dark:to-gray-800 dark:from-gray-700 p-3 text-center">
              <Download className="w-10 h-10 lg:w-14 lg:h-14 text-gray-500" />
              <h3>Download CV</h3>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}