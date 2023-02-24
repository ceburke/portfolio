import { COLORS } from "../constants";
import {css} from '@emotion/react'
import { buttonResetCss } from "../styles/styles";

interface Props {
  className?: string
  size?: 'large' | 'medium'
  title: string
  subtitle?: string

}

const baseCardCss = css`
  height: 275px;
  background: ${COLORS.gray[900]};
  border-radius: 35px;
`

const largeCardCss = css`
  flex: 1 1 100%;
`

const mediumCardCss = css`
  flex: 1 1 50%;
`

export default function Card(props: Props): JSX.Element {
  const {className, size = 'large', title, subtitle} = props

  return (
    <div className={className} css={[baseCardCss, size === 'large' ? largeCardCss : mediumCardCss]}>
      <div>
        <p css={css`font-weight: bold; font-size: 20px; margin: 2px 0;`}>{title}</p>
        {!!subtitle && <p css={css`font-weight: bold; font-size: 20px; color: #676767; margin: 2px 0;`}>{subtitle}</p>}
        <button type="button" title="Expand" css={[buttonResetCss, css`color: #A64C07; font-size: 40px;`]}>+</button>
      </div>
    </div>
  )
}