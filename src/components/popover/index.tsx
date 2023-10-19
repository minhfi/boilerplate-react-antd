import { FC, ReactElement } from 'react'
import { Popover as PopoverBasic, PopoverProps } from 'antd'
import './style.scss'

interface IPopoverProps extends PopoverProps {
  content: string | ReactElement
}

export const Popover: FC<IPopoverProps> = (props) => {
  return (
    <PopoverBasic
      {...props}
      className="popover"
      overlayClassName="popover-card"
      content={props.content}
    >
      {props.children}
    </PopoverBasic>
  )
}

Popover.defaultProps = {
  placement: 'bottom'
}
