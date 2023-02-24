import {css} from '@emotion/react'
import {Button} from '@mui/material'
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import { COLORS } from '../constants'
import { sectionCss } from '../styles/styles'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Claire Burke | Portfolio Home</title>
        <meta name="description" content="I'm Claire, a product designer with a passion for UI and UX." />
        <link rel="icon" href="/favicon.ico" />
        {/* TODO switch this to local @next/font */}
        <link rel="stylesheet" href="https://use.typekit.net/eri7ofr.css"></link>
      </Head>

      <div css={css`position: relative; display: flex; align-items: center; flex-direction: column; color: #fff;`}>
        <NavBar />
        <div css={css`z-index: -1; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: ${COLORS.primary}`}></div>
        <section css={sectionCss}>
        <h1>
          Hi there, I’m Claire,<br />
          a <span css={css`color: ${COLORS.secondary}`}>product designer</span> with an eye for<br />
          <span css={css`color: ${COLORS.secondary}`}>creating community</span> and a passion for <span css={css`color: ${COLORS.secondary}`}>outdoor recreation</span>
        </h1>
        <p>
          I am a designer by way of scientific communication, environmental consulting and printmaking.<br/> 
          My experience gives me a fresh approach to UX/UI and an insatiable curiosity for learning. <Link href="/about" >Read More</Link>
        </p>
        </section>
        <div css={css`position: relative; width: 1200px; max-width: 95vw; height: 450px; top: 100px;`}>
          <Image src="/rocks.png" alt="Red rock canyon landscape" layout="fill" />
        </div>
      </div>

    </div>
  )
}

export default Home
