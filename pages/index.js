import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'



export default function Home() {
  return (
    <Layout>
    <>
      <Head>
      <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <h1>👋 Olá, seja bem vindo.</h1>
   <p>Aqui você <b>programador</b> encontra o <b>passo a passo</b> para aprender <b>Inglês</b>.</p>
   <h3>Parte 1</h3>
   <p>Comece pelo básico e vá avançando conforme sentir segurança.</p>
    <h4>Aprende tudo sobre <Link href="/verbos">
          <a className="hover:text-blue-700">verbos</a>
        </Link></h4>
    
    </>
    </Layout>
  )
}
