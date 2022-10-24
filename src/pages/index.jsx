import Head from 'next/head'

import Divider from '../components/Divider'
import Menu from '../components/menu'
import ProjectsCarousel from '../components/ProjectsCarousel'
import Footer from '../components/Footer'

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
            <div className={style.projectsContainer}>
              <div className={style.projectsWrapper}>
                <h2>Projetos</h2>
                <img
                  src="/projects-illustration.svg"
                  alt="Ilustração de Projetos"
                />
              </div>
              <div className={style.carouselWrapper}>
                <ProjectsCarousel title="Páginas Web" type="webPages" />
                <ProjectsCarousel title="Aplicações Web" type="webApps" />
              </div>
            </div>
            <div className={style.mitContainer}>
              <img
                src="/mit-illustration.svg"
                alt="Ilustação MIT"
              />
              <ProjectsCarousel title="Projetos de Código Aberto" type="mit" />
            </div>
          </div>
        </section>
        <Divider type="down" />


        <section className={`${style.about} container`} id="About">
            <h2>Sobre</h2>
            <div className={style.aboutContainer}>
              <img
                src="/about-illustration.svg"
                alt="Ilustração de desenvolvedor"
              />
              <div className={style.aboutWrapper}>
                <p>Olá! Me chamo Willian e sou um desenvolvedor web em constante aprendizado.<br/><br/>Após aprender um pouco a linguagem de programação C na matéria de &lsquo;Programação Imperativa&rsquo; na Universidade Federal de Sergipe em 2021, fiquei apaixonado pela programação. Mesmo após terminar a matéria eu continuei buscando formas de ciar uma interface para o usuário interagir com meus programas, foi aí que eu conheci o JavaScript e o Desenvolvimento Web.<br/>Desde então continuei estudando, decidi me aprimorar na área e me tornar um profissional.<br/><br/>Hoje sou Desenvolvedor Front-End e um apaixonado por tecnologias.<br/><br/>Desafios, bootcamps e maratonas são coisas que eu gosto muito de fazer e participar, pois consigo experiências que ajudam a melhorar todas as minhas skills, que vão além de skills técnicas e me conectar de forma mais intensa com a comunidade.<br/><br/>Sou minimalista, rockeiro, gosto de jogos e de me reunir com os amigos para jogar RPG.</p>
                <div className={style.skillsWrapper}>
                  <h3>Minhas habilidades, entre outras, são:</h3>
                  <ul>
                    <li><img src="/skills-icons/git.svg" alt="Git" /><span>Git</span></li>
                    <li><img src="/skills-icons/js.svg" alt="JavaScript" /><span>JavaScript</span></li>
                    <li><img src="/skills-icons/react.svg" alt="React" /><span>React</span></li>
                    <li><img src="/skills-icons/next.svg" alt="Next.JS" /><span>Next.JS</span></li>
                  </ul>
                  <ul>
                    <li><img src="/skills-icons/terminal.svg" alt="Terminal" /></li>
                    <li><img src="/skills-icons/sass.svg" alt="Sass" /></li>
                    <li><img src="/skills-icons/tailwind.svg" alt="Tailwind" /></li>
                    <li><img src="/skills-icons/ts.svg" alt="Typestript" /></li>
                    <li><img src="/skills-icons/figma.svg" alt="Figma" /></li>
                  </ul>
                </div>
              </div>
            </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
