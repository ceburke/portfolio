import {css} from '@emotion/react'
import {Button} from '@mui/material'
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
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

      <div css={css`position: relative; display: flex; align-items: center; flex-direction: column; color: #fff; margin-bottom: 175px;`}>
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

      <section css={sectionCss}>
        <h2>What I've Done</h2>
        <p>My work is a collection of self-led and created projects. The case studies, optimizations and design work represent my willingness to learn and passion for enabling users to reach their goals.</p>
        <div css={css`display: flex; margin-top: 90px;`}>
          <h3 css={css`flex: 0 0 150px; height: 100%; padding-top: 40px;`}>Case Studies</h3>
          <div css={css`width: 100%;`}>
            <Card size="large" title="Type 1 Meet" subtitle="Community and resource sharing platform for people with chronic disease" />
            <Card size="large"  css={css`margin-top: 35px`} title="Southwest Print Guild" subtitle="Expanding professional networks and community building in a rural region" />
          </div>
        </div>

        <div css={css`display: flex; margin-top: 90px;`}>
          <h3 css={css`flex: 0 0 150px; height: 100%; padding-top: 40px;`}>Optimization</h3>
          <div css={css`display: flex; gap: 35px; flex: 1 1 100%;`}>
            <Card size="medium" title="Strava" subtitle="Integrating trail conditions reporting with activities and heat maps" />
            <Card size="medium" title="Google Maps" subtitle="user flow for planned trips with custom alarms and live conditions" />
          </div>
        </div>

        <div css={css`display: flex; margin-top: 90px; width: 100%;`}>
          <h3 css={css`flex: 0 0 150px; height: 100%; padding-top: 40px;`}>Design</h3>
          <div css={css`display: flex; gap: 35px; width: 100%;`}>
            <Card size="medium" title="Book Covers" subtitle="A series of imaginary book covers inspired by a love of reading and design" />
            <Card size="medium" title="Solved in motion" subtitle="Immersive art installation featuring a local trail system" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
