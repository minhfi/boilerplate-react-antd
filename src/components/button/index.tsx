import { FC } from 'react'
import { Button as ButtonBasic } from 'antd'
import { NativeButtonProps } from 'antd/lib/button/button'
import './style.scss'

export interface IButtonProps extends NativeButtonProps {
  type?: 'primary' | 'link'
  onClick?: () => void
}

export const Button: FC<IButtonProps> = (props) => {
  return (
    <ButtonBasic
      type={props.type}
      className="button body-2"
      {...props}
    >
      {props.children}
    </ButtonBasic>
  )
}

Button.defaultProps = {
  type: 'primary'
}
