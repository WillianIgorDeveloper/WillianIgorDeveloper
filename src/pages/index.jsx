import Head from 'next/head'
import Menu from '../components/menu'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <title>Portifólio | Willian Igor</title>
      </Head>
      <Menu />
    </>
  )
}
