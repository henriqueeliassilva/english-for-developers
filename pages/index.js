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
  <blockquote>Steve Jobs once said “Everybody in this country should learn to program a computer, because it teaches you how to think”.
  </blockquote>
</main>
    </div>
    </Layout>
  )
}
