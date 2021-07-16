import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout>
    <div className="antialiased text-gray-900">
      <Head>
      <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
  <h1>👋 Olá, seja bem vindo.</h1>
  <p>Nosso objetivo é te ajudar a aprender inglês para alavancar sua carreira de programador.
  </p>
  <blockquote>Steve Jobs once said “Everybody in this country should learn to program a computer, because it teaches you how to think”.
  </blockquote>
  <p>Quem fala inglês pode consumir conteúdo direto da fonte e sair na frente de quem ainda não fala. Se você é um programador ou deseja se tornar um, aprender inglês é essencial. </p>
  <p>
  Aumente sua credibilidade e o número de oportunidades aprendendo o essencial do inglês voltado para programadores.    
  </p>
</main>
    </div>
    </Layout>
  )
}
