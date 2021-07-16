import Head from 'next/head'
import Link from 'next/link'

export default function About () {
    return (
        <>
        <head>
        <title>About</title>
        </head>
        <h1>About</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
       </>
    )

}