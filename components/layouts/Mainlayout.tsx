import { FC } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { Navbar } from "../ui"


interface Props {
  title?: string
  children?: React.ReactNode
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Mainlayout: FC<Props> = ({ title, children }) => {


  
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'} </title>
        <meta name="author" content="enzo giacoia" />
        <meta name="description" content={`informacion de pokemon ${title}`} />
        <meta name="keywords" content={`xxxx, pokemon, pokedex ${title}`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Pagina sobre ${title}`}/>
        <meta property="og:image" content={`${origin}/img/banner.png` }/>
      </Head>

      <Navbar></Navbar>
      <main >
        {children}
      </main>
    </>
  )
}