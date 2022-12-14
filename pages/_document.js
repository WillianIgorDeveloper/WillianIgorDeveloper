import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head />
      <body className='
        transition-colors duration-100
        bg-gray-100 text-gray-800
        dark:bg-gray-900 dark:text-gray-100
      '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}