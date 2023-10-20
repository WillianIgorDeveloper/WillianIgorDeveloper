import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Home</title>
        <link rel="icon" href="/icon.svg" />
          <meta name="description" content="A fornt end React developer " />
         
          <meta property="og:url" content="https://willianigordeveloper.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Willian Igor Developer" />
          <meta property="og:description" content="A fornt end React developer " />
          <meta property="og:image" content="https://raw.githubusercontent.com/WillianIgorDeveloper/WillianIgorDeveloper/7d56c9b3c56a733df76a580aab121bdd4a89be80/public/brand-illustration-animate.svg" />     
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="willianigordeveloper.vercel.app" />
          <meta property="twitter:url" content="https://willianigordeveloper.vercel.app/" />
          <meta name="twitter:title" content="Willian Igor Developer" />
          <meta name="twitter:description" content="A fornt end React developer " />
          <meta name="twitter:image" content="https://raw.githubusercontent.com/WillianIgorDeveloper/WillianIgorDeveloper/7d56c9b3c56a733df76a580aab121bdd4a89be80/public/brand-illustration-animate.svg" />
      </Head>

      <main className='container m-auto'>
        <section className='pt-16 w-full flex flex-col items-center justify-center gap-3 md:flex-row lg:gap-5'>
          <Image src="/brand-illustration-animate.svg" alt='illustração de desenvolvedor' width="500" height="500" priority className='w-11/12 md:w-2/5' />
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-50'>Willian Igor Santos</h1>
            <p className='text-xl'>Desenvolvedor Front-Ent</p>
          </div>
        </section>
      </main>

    </div>
  )
}
