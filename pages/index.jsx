import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Home</title>
        <link rel="icon" href="/icon.svg" />
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
