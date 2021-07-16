import Head from 'next/head'
import Image from 'next/image'
import avatar from '../public/avatar.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>English App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <nav className="bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <div className="flex items-center text-gray-700">
          <a href="#" class="flex items-center py-2 px-2">
          <Image src={avatar}
              alt="Picture of the author"
              width={70}
              height={70}
        />
            <span className="text-black text-xl">English for Developers</span>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-1 m-2">
        {/* <a href="#" class="py-4 px-3 text-gray-700 hover:text-gray-900">Login</a> */}
        <Link href="/about">
          <a className="py-2 px-3 bg-green-400 text-white rounded hover:bg-white hover:text-green-400 hover:border-2 hover:border-green-400 ">WhatsApp</a>
        </Link>
      </div>
    </div>
  </div>
</nav>
<div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
<div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-autoprose lg:prose-xl">
  <h1>👋 Olá, seja bem vindo.</h1>
  <p>Nosso objetivo é te ajudar a aprender inglês para alavancar sua carreira de programador.
  </p>
  <blockquote>Steve Jobs once said “Everybody in this country should learn to program a computer, because it teaches you how to think”.
  </blockquote>
  <p>Quem fala inglês pode consumir conteúdo direto da fonte e sair na frente de quem ainda não fala. Se você é um programador ou deseja se tornar um, aprender inglês é essencial. </p>
  <p>
  Aumente sua credibilidade e o número de oportunidades aprendendo o essencial do inglês voltado para programadores.    
  </p>

</div>
</div>
</main>
    </div>
  )
}
