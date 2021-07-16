import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'


export default function About () {
  return (
    <Layout>
      <Head>
        <title>About page</title>
      </Head>
      <h1>About</h1>
        
        <p>Quem fala inglês pode consumir conteúdo direto da fonte e sair na frente de quem ainda não fala. Se você é um programador ou deseja se tornar um, aprender inglês é essencial. </p>
  <p>
  Aumente sua credibilidade e o número de oportunidades aprendendo o essencial do inglês voltado para programadores.    
  </p>
  <footer>
  
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        
  </footer>
    </Layout>
  )
}