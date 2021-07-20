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
        <form method="POST" action="https://fundamental5030.activehosted.com/proc.php" id="_form_1_" noValidate>
    <input type="hidden" name="u" value="1" />
    <input type="hidden" name="f" value="1" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <div className=" flex flex-col items-center pb-10 bg-gray-100 dark:bg-gray-800 rounded-lg mb-10 mt-10">
      <div className="">
          <h2 className="m-16 text-center ">Cadastre-se para receber atualizações por e-mail</h2> 
      </div>
      <div>
        <div>
          <p>
            Digite seu e-mail e mantenha-se por dentro.
          </p>
        </div>
      </div>
      <div>
        <div>
          <input className="pl-5 w-64 md:w-64 lg:w-96  text-black autofill:text-fill-black py-3 placeholder-gray-400 focus:ring-indigo-500 focus:border-blue-500 block border-gray-300 rounded-md" type="text" id="email" name="email" placeholder="Digite seu e-mail" required/>
        </div>
      </div>
      <div >
        <button className="mt-4 w-64 md:w-64 lg:w-96 transition-all duration-150 ease-in-out bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:scale-105 transform hover:shadow-xl text-white font-semibold py-3 rounded-md" id="_form_1_submit"  type="submit">
          Quero receber!
        </button>
      </div>
      <div>
      </div>
    </div>
    <div >
    </div>
    <div>
    </div>
  </form>
    </>
    </Layout>
  )
}
