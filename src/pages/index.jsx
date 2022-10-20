import Head from 'next/head'
import Menu from '../components/menu'

import style from '../styles/index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <title>Portifólio | Willian Igor</title>
      </Head>
      <Menu />
      <main>
        <section id='Home' className={style.home}>
          <img 
            src="/main-illustration.svg" 
            alt="Ilustração de desenvolvedor" 
            className={style.mainIllustration}
          />
          <h1>Willian Igor Santos</h1>
          <strong>Devenvolvedor Front-End</strong>
        </section>
      </main>
    </>
  )
}
