import { FC } from 'react'
import { Button as ButtonAntd } from 'antd'

export interface IButtonProps {
  type?: 'primary' | 'link'
  width?: number
  height?: number
  background?: string
  color?: string
  onClick?: () => void
}

export const Button: FC<IButtonProps> = ({ width, height, type, color, background, onClick, ...props }) => {
  return (
    <ButtonAntd
      type={type}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        color: color,
        background: background
      }}
    >
      {props.children}
    </ButtonAntd>
  )
}

Button.defaultProps = {
  type: 'primary',
  height: 40
}
