import Head from 'next/head'
import Divider from '../components/Divider'

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
          <div className={style.textContainer}>
            <h1>Willian Igor Santos</h1>
            <strong>Devenvolvedor Front-End</strong>
          </div>
        </section>


        <Divider type="up" />
        <section id='Projects' className={style.projects}>
          <div className='container'>
            <div>
              <div>
                <h2>Projetos</h2>
                {/* <img
                  src=""
                  alt=""
                /> */}
              </div>
              <div>
                {/* <ProjectsCarousel /> */}
                {/* <ProjectsCarousel /> */}
              </div>
            </div>
            <div>
              {/* <img
                src=""
                alt=""
              /> */}
              {/* <ProjectsCarousel /> */}
            </div>
          </div>
        </section>
        <Divider type="down" />
      </main>
    </>
  )
}
