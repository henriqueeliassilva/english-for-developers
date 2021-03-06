import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../public/avatar.png'


export const siteTitle = 'English For Developers'

export default function Layout({ children }) {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <div className="flex items-center text-gray-700">
          <a href="/" className="flex items-center py-2 px-2">
          <Image src={avatar}
              alt="Emoji"
              width={70}
              height={70}
        />
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Link href="/">
          <a className="py-4 px-3 text-gray-700 hover:text-gray-900 hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="py-4 px-3 text-gray-700 hover:text-gray-900 hover:underline">About</a>
        </Link>
      </div>
    </div>
  </div>
</nav>
      <main>
        <header className="flex items-center justify-between print:hidden">
      <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
<div className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-autoprose lg:prose-xl">
          {children}
          </div>
      </div>
      </header>
          </main>
     
    </div>
  )
}