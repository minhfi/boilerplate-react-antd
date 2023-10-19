import { FC, ReactNode } from 'react'
import { Button as ButtonBasic } from 'antd'
import { omit } from 'lodash'
import { BaseButtonProps } from 'antd/lib/button/button'
import './style.scss'

export interface IButtonProps extends BaseButtonProps {
  colors?: string
  icon?: ReactNode
  endIcon?: ReactNode
  type?: 'primary' | 'default' | 'text'
  onClick?: () => void
}

export const Button: FC<IButtonProps> = (props) => {
  return (
    <ButtonBasic
      {...omit(props, 'endIcon')}
      type={props.type}
      className={`button body-2 ${props.className ? props.className : ''}`}
      style={{ color: props.colors }}
    >
      <div>
        {props.children}
        {props.endIcon ? <span className="ml-8">{props.endIcon}</span> : ''}
      </div>
    </ButtonBasic>
  )
}

Button.defaultProps = {
  type: 'primary'
}
