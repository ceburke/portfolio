import { COLORS } from "../constants";
import {css} from '@emotion/react'
import { sectionCss } from "../styles/styles";
import Image from 'next/image'
import { useRouter } from "next/router";

const baseNavItemCss = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    border-top: 12px solid transparent;
    cursor: pointer;
    transition: all 300ms ease;
    font-size: 24px;

    &:hover {
        opacity: 0.8;
    }
`

const pageNavItemCss = css`
    font-weight: 700;
`

const navItemCss = css`
    color: ${COLORS.secondary};
`

const activeItemCss = css`
    border-top-color: ${COLORS.secondary};
`

export default function NavBar(): JSX.Element {
    const router = useRouter()

    return (
        <header css={css`display: flex; align-items: center; height: 100px;`}>
            <div css={[sectionCss, css`display: flex; align-items: center; justify-content: space-between; height: 100%;`]}>
            <span css={css`color: ${COLORS.secondary}; font-weight: bold; font-size: 40px; line-height: 48px; text-transform: lowercase; margin-top: 12px;`}>Claire Burke</span>
            <nav css={css`height: 100%; width: 800px; text-align: right; display: flex; align-items: center; justify-content: space-evenly;`}>
                <a css={[baseNavItemCss, pageNavItemCss, router.pathname === '/' && activeItemCss]} href="/">work</a>
                <a css={[baseNavItemCss, pageNavItemCss, router.pathname === '/about' && activeItemCss]} href="/about">about</a>
                <a css={[baseNavItemCss, navItemCss]} href="/resume.pdf" about="_blank"><Image src="/assets/paperclip.png" height={25} width={25} />resume</a>
                <a css={[baseNavItemCss, navItemCss]} href="mailto:claireburke1130@gmail.com" about="_blank"><Image src="/assets/mail.png" height={25} width={25} />email</a>
            </nav>
            </div>
        </header>
    )
}