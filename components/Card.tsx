import { COLORS } from "../constants";
import {css} from '@emotion/react'
import { buttonResetCss } from "../styles/styles";
import Image, { StaticImageData } from 'next/image'

interface Props {
  className?: string
  size?: 'large' | 'medium'
  title: string
  subtitle?: string
  image?: string | StaticImageData
  imageType?: 'normal' | 'cover'
  imageAlt?: string
}

const baseCardCss = css`
  height: 275px;
  background: ${COLORS.gray[900]};
  border-radius: 35px;
  display: flex;
  overflow: hidden;
  position: relative;
`

const largeCardCss = css`
  flex-direction: row;
  flex: 1 1 100%;
`

const mediumCardCss = css`
  flex-direction: column-reverse;
  flex: 1 1 50%;
`

const baseImageCss = css`
  position: relative;
  top: 30px;
  right: 30px;
`

const largeImageCss = css`
  flex: 1 1 50%;
`

const mediumImageCss = css`
  height: 100px;
  width: 100px;
  align-self: flex-end;
`

const coverImageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  overflow: hidden;
`

export default function Card(props: Props): JSX.Element {
  const {className, size = 'large', image, imageType, imageAlt = '', title, subtitle} = props

  return (
    <div className={className} css={[baseCardCss, size === 'large' ? largeCardCss : mediumCardCss]}>
      <div css={css`display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-start; margin: 25px; max-width: 500px;`}>
        <p css={css`font-weight: bold; font-size: 20px; margin: 2px 0;`}>{title}</p>
        {!!subtitle && <p css={css`font-weight: bold; font-size: 20px; color: #676767; margin: 2px 0;`}>{subtitle}</p>}
        <button type="button" title="Expand" css={[buttonResetCss, css`color: #A64C07; font-size: 40px;`]}>+</button>
      </div>
      {!!image && <div css={[baseImageCss, size === 'large' ? largeImageCss : imageType === 'cover' ? coverImageCss : mediumImageCss]}>
        <Image layout="fill" src={image} alt={imageAlt} objectFit={imageType === 'cover' ? 'cover' : 'contain'} />
      </div>}
    </div>
  )
}