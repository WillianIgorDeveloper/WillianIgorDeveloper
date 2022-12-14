import Image from 'next/image'
import Head from 'next/head'

export default function About() {

  return (
    <div>
      <Head>
        <title>Willian Igor | Portifólio - Sobre</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='container m-auto p-3 pb-20'>
        <h1 className="text-2xl border-b-2 pb-3 w-1/2 font-bold border-gray-800 dark:border-gray-100">Sobre</h1>
        <div className='lg:flex lg:gap-5 lg:p-5 lg:pt-10 lg:items-center'>
          <Image src="/about-illustration-animate.svg" width="500" height="500" className="my-3 py-3 w-4/5 md:w-2/5 mx-auto" />
          <p className='text-center lg:flex-1'>Olá! Me chamo Willian e sou um desenvolvedor web em constante aprendizado.<br /><br />Após aprender um pouco a linguagem de programação C na matéria de 'Programação Imperativa' na Universidade Federal de Sergipe em 2021, fiquei apaixonado pela programação. Mesmo após terminar a matéria eu continuei buscando formas de ciar uma interface para o usuário interagir com meus programas, foi aí que eu conheci o JavaScript e o Desenvolvimento Web. Desde então continuei estudando, decidi me aprimorar na área e me tornar um profissional.<br /><br />Hoje sou Desenvolvedor Front-End e um apaixonado por tecnologias.<br /><br />Desafios, bootcamps e maratonas são coisas que eu gosto muito de fazer e participar, pois consigo experiências que ajudam a melhorar todas as minhas skills, que vão além de skills técnicas e me conectar de forma mais intensa com a comunidade.<br /><br />Sou minimalista, rockeiro, gosto de jogos e de me reunir com os amigos para jogar RPG.</p>
        </div>
      </main>
    </div>
  )
}