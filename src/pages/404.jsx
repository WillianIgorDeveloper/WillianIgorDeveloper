import Head from 'next/head'

import style from '../styles/notFound.module.scss'

export default function NotFound() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <title>404</title>
      </Head>
      <div className={`container ${style.container}`}>
        <img 
          src="/404-illustration.svg" 
          alt="404"
          className={style.imageContainer}
        />
        <h2>Página não encontrada!</h2>
      </div>
    </>
  )
}
