import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Home</title>
        <link rel="icon" href="/icon.svg" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1129761952743301180/1163845750741020803/icon.png?ex=65410ed2&is=652e99d2&hm=0f0bce67d59171a1efa045cf37aacab99b66b90ae9a9b632e1eb1c86310795b2&=" />
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
